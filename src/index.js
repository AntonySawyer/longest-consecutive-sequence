module.exports = function longestConsecutiveLength(array) {
  let uniqueSet = new Set(array);
  let sequenceLength = 0;
  for (let item of uniqueSet) {
    if (!uniqueSet.has(item-1)) {
      let currentSequence = 1;
      let nextEl = item+1;
      while (uniqueSet.has(nextEl)) {
        currentSequence++;
        nextEl++;
      }
      if (currentSequence > sequenceLength) {
        sequenceLength = currentSequence;
      }
    } //first if end
  }

  return sequenceLength;
}
