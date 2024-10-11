import React, { useState } from 'react';
import './converterForQisas.css'

const ConverterForQisas = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');


  const removingVerseNumbers = (inputText) => {
    // Split the input text into lines
    const lines = inputText.split('\n');

    // Iterate through each line
    const convertedLines = lines.map(line => {
      // Remove '\f + \ft'
      line = line.replace(/\\f \+ \\ft/g, '\\f');

      // Check if the line contains '\s'
      const startIndex = line.indexOf('\\s');
      if (startIndex !== -1) {
        // Find the index of the next '\' character after '\s'
        const endIndex = line.indexOf('\\', startIndex + 3);
        if (endIndex !== -1) {
          // Extract the content between '\s' and the next '\' character
          const content = line.substring(startIndex + 3, endIndex).trim();

          // Remove '\s' and the content between '\s' and the next '\' character
          line = `${line.substring(0, startIndex)}<div className='paragraph_heading'><p>${content}</p></div>${line.substring(endIndex)}`;
        }
      } else if (line.startsWith('\\v')) {
        // Split the line by spaces
        const parts = line.split(' ');

        // Check if there are at least two spaces in the line
        if (parts.length >= 3) {
          // Remove the '\v' prefix and everything before the second space
          line = parts.slice(2).join(' ');
        }
      }
      // If the line doesn't contain '\s' or '\v', return it as is
      return line;
    });

    // Join the converted lines back together
    const convertedText = convertedLines.join('\n');
    return convertedText;
  };







  const convertParagraphHeadings = (text) => {
    let newText = text;
    let startIndex = newText.indexOf('\\s');

    // Loop until no more '\s' is found
    while (startIndex !== -1) {
      // Replace '\s' with '!!!startParagraph!!! '
      newText = newText.replace('\\s', '!!!startParagraph!!! ');

      // Find the index of the next '\' character after '\s'
      const endIndex = newText.indexOf('\\', startIndex + 3);

      // Insert '!!!endParagraph!!!' before the next '\' character
      if (endIndex !== -1) {
        newText = newText.substring(0, endIndex) + '!!!endParagraph!!!' + newText.substring(endIndex);
      }

      // Find the index of the next '\s'
      startIndex = newText.indexOf('\\s');
    }

    return newText;
  };


  const convertBoldItalics = (text) => {
    let newText = text;
    let startIndex = newText.indexOf('\\bdit*');

    // Replace all '\bdit*' occurrences with '!!!boldItalicEnd!!!'
    while (startIndex !== -1) {
      newText = newText.replace('\\bdit*', '!!!boldItalicEnd!!!');
      startIndex = newText.indexOf('\\bdit*', startIndex + 1);
    }

    // Find and replace '\bdit' occurrences
    startIndex = newText.indexOf('\\bdit');

    while (startIndex !== -1) {
      // Find the index of the next '\' character after '\bdit'
      const endIndex = newText.indexOf('\\', startIndex + 5);

      // Check if '!!!boldItalicEnd!!!' comes before the next '\' character
      if (endIndex !== -1 && newText.indexOf('!!!boldItalicEnd!!!', startIndex + 5) < endIndex) {
        // If '!!!boldItalicEnd!!!' is found before '\', skip this occurrence
        startIndex = newText.indexOf('\\bdit', endIndex);
        continue;
      }

      // Insert '!!!boldItalicStart!!!' before the next '\' character
      if (endIndex !== -1) {
        newText = newText.substring(0, endIndex) + '!!!boldItalicStart!!!' + newText.substring(endIndex);
      }

      // Find the next index of '\bdit'
      startIndex = newText.indexOf('\\bdit', endIndex);
    }

    return newText;
  };




  const handleInputChange = (event) => {
    const newText = event.target.value;
    setInputText(newText);
    // Clear the output text if the input text is empty
    if (newText.trim() === '') {
      setOutputText('');
    }
  };

  const handleConvertClick = () => {
    let convertedText = removingVerseNumbers(inputText);
    convertedText = convertParagraphHeadings(convertedText);
    convertedText = convertBoldItalics(convertedText); // Apply the convertBoldItalics function
    setOutputText(convertedText);
  };

  return (
    <div className="minister-home qisas_converter stories">
      <div className="separate_into_two_columns">
        <header>
          <div>
            <h2>Conv<span>e</span>rt<span>e</span>r from th<span>e</span> Parat<span>e</span>xt for HTML</h2>
          </div>
        </header>
        <div className="sep_part1">
          <div className='container_for_textarea'>
            <textarea
              value={inputText}
              onChange={handleInputChange}
              placeholder="Paste your text here..."
              rows={10}
              cols={50}
            />
            <button className='convert_btn' onClick={handleConvertClick}>Convert</button>
          </div>

          <main>
            <div>OUTPUT:</div>

            <div className='output_result'>{outputText}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ConverterForQisas;
