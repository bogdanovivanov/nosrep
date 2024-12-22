let labels = ['Label 1', 'Label 2', 'Label 3'];
for (let index = 0; index < labels.length; index++) {
  console.log(labels[index]);
  if (index == labels.length - 1) {
    console.log('Last label reached!');
    // Perform some action specific to the last label
  }
}
