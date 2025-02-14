import astuces from "./donnees/astuces";

function astuceDuJour() {
    const startDate = new Date(2024, 0, 1); // Date de référence (1er janvier 2024)
    const today = new Date();
    const differenceInDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    return astuces[differenceInDays % astuces.length];
}

export default astuceDuJour;