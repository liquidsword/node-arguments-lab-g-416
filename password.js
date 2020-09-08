// code solution here
var generatePassword = function generatePassword(length, charset) {
  var length = length || 8,
      charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      password = '';
      for (var i = 0, n = charset.length; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * n ))
      }
      return password
}
