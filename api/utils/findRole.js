module.exports = findRole = (role) => {
  let roleObject
  switch (role) {
    case 'mentor':
      roleObject = { Mentor: 1111 }
      break
    case 'student':
      roleObject = { Student: 2222 }
      break

    case 'admin':
      roleObject = { Admin: 3333 }
      break

    case 'coach':
      roleObject = { Coach: 4444 }
      break

    case 'encourager':
      roleObject = { Encourager: 5555 }
      break

    case 'writer':
      roleObject = { Writer: 6666 }
      break

    case 'moderator':
      roleObject = { Moderator: 7777 }
      break
  }
  return roleObject
}
