import React, { useEffect, useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import './styles.css'



type Props = {
    pdfUrl: string,
    width: number,
    height: number
}

const PdfReader = ({ pdfUrl, width, height }: Props) => {

    const CSS_HANDLES = [
        "pdf__contenedor"

    ]
    const handles = useCssHandles(CSS_HANDLES)

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        mounted && (
            <div className='flex'>
                <object
                    className={handles.pdf__contenedor}
                    data={pdfUrl}
                    type="application/pdf"
                    width={width}
                    height={height}
                >

                    <iframe title='PDF' src={pdfUrl} width={width} height={height}>
                        <p>Este navegador no soporta PDF!</p>
                    </iframe>

                </object>
            </div>
        )
    )
}

export default PdfReader