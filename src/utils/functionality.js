export function txtSlicer(txt=String, max=100) {
    if (txt.length >= max) {
        return (
            txt.slice(0, max) + "..."
        )
    }
}
