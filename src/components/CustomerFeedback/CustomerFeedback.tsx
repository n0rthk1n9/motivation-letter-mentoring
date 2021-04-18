import * as React from 'react'
import { CustomerFeedbackCard } from '../CustomerFeedbackCard'
import anne from '../../assets/images/anne.png'

export function CustomerFeedback(): JSX.Element {
  return (
    <div className="flex flex-col md:flex-row p-2 md:p-6 max-w mx-2 md:mx-20 my-2 md:my-20 rounded-xl shadow-md items-center bg-fawn space-x-0 md:space-x-5 space-y-2 md:space-y-0">
      <CustomerFeedbackCard
        content="Super, habe ein Motivationsschreiben für eine Studienplatzbewerbung schreiben müssen. Annes
Tipps im How-To Guide waren sehr hilfreich, sowas hab ich im Abi einfach nicht gelernt."
        img={anne}
      />
      <CustomerFeedbackCard
        content="Anne hat mir geholfen ein Motivationsschreiben für einen Werkstudentenjob als Informatikstudent
zu erstellen. Ich dachte ich hab noch gar nichts gelernt in meinem Studium was dem Unternehmen
helfen kann. Gemeinsam haben wir es geschafft meine Fähigkeiten zu identifizieren und ich hab mich
mit dem Motivationsschreiben viel kompetenter gefühlt."
        img={anne}
      />
      <CustomerFeedbackCard
        content="Mein Problem war vor allem zu verstehen, warum Unternehmen genau mich einstellen sollen. Es
haben so viele Menschen die gleichen oder bessere Qualifikationen wie ich. Anne hat mir mit Ihrer
Anleitung geholfen meine persönlichen Stärken zu identifizieren die ich nun in meinen
Motivationsschreiben auch benennen kann."
        img={anne}
      />
    </div>
  )
}
