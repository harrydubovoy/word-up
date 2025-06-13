export const BoxLayout = ({ children, type, captionTop, captionBottom }) => (
    <>
        {captionTop && (
            <div className="header">
                <span>captionTop[0]</span>
                <span>captionTop[1]</span>
            </div>
        )}
        <div box-={type ?? 'square'}>
            {children}
        </div>
        {captionBottom && (
            <div className="header">
                <span>captionBottom[0]</span>
                <span>captionBottom[1]</span>
            </div>
        )}
    </>
)