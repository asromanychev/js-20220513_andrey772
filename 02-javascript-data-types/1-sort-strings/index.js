/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {

  let collator = new Intl.Collator('ru', {sensitivity: 'case', caseFirst: 'upper'});

  const newarr = [...arr].sort(function(a, b) {
    return collator.compare(a, b);
  });

  if (param === 'desc') {
    return newarr.reverse();
  } else {
    return newarr;
  }
}
