const id = "1gZ_eGQh1bbNn7vGT0hz-woSYB1j_n2gs";
const url = `https://drive.google.com/uc?export=download&id=${id}`;

export const downloadCv = () => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("target", "_blank");
    link.setAttribute("download", "curriculo-marisangela.pdf")
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}