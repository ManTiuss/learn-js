function generateList(array) {
    const result = document.createElement('ul');
  
    for (const item of array) {
      const listItem = document.createElement('li');
  
      if (Array.isArray(item)) {
        listItem.appendChild(generateList(item));
      } else {
        listItem.textContent = item;
      }
  
      result.appendChild(listItem);
    }
  
    return result;
  }
  
  const inputArray = [1, 2, 3, [1, 2, 3], 4];
  const outputElement = generateList(inputArray);
  document.body.appendChild(outputElement);