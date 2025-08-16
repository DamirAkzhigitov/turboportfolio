'use client'

import { PDFViewer } from '@react-pdf/renderer'
import ResumeDocument from "@/app/resume/components/ResumeDocument";

export default function Page() {
    return <div style={{
        width: '100%',
        height: '100vh'
    }}>
        <PDFViewer  style={{
                        width: '100%',
                        height: '100vh'
                    }}>
            <ResumeDocument />
        </PDFViewer>
    </div>
}