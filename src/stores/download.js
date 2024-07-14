const id = "182vBUlAujsZxqlmsS7Gsol6abZ9laQy_";
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