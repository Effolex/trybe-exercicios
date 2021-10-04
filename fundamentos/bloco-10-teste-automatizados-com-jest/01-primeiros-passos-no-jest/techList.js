function techList(array, name) {
  if (!array.length) {
    return 'Vazio!';
  }

  return [...array].sort().map((element) => {
    return {
      tech: element,
      name,
    };
  })
}

module.exports = techList;