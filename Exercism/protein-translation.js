//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const translate = (rna = "") => {
  const codonMap = {
    AUG: "Methionine",

    UUU: "Phenylalanine",
    UUC: "Phenylalanine",

    UUA: "Leucine",
    UUG: "Leucine",

    UCU: "Serine",
    UCC: "Serine",
    UCA: "Serine",
    UCG: "Serine",

    UAU: "Tyrosine",
    UAC: "Tyrosine",

    UGU: "Cysteine",
    UGC: "Cysteine",

    UGG: "Tryptophan",
  };

  const stopCodons = ["UAA", "UAG", "UGA"];
  const result = [];

  for (let i = 0; i < rna.length; i += 3) {
    const codon = rna.slice(i, i + 3);

    if (stopCodons.includes(codon)) {
      break;
    }

    if (!codonMap[codon]) {
      throw new Error("Invalid codon");
    }

    result.push(codonMap[codon]);
  }

  return result;
};
