import * as React from 'react'
import anne from '../../assets/images/anne.png'

export function Introduction(): JSX.Element {
  return (
    <div className="p-6 max-w mx-20 my-20 bg-white rounded-xl shadow-md flex items-center bg-dark-khaki space-x-5">
      <div className="flex-shrink-0">
        <img className="h-24" src={anne} />
      </div>
      <div className="flex-auto">
        Ich bin Anne, 28 Jahre alt und habe in einen Masterabschluss in
        Umweltingenieurwesen. Momentan promoviere im Bereich Hydrogeologie in
        München. In meinem Leben bin ich sehr oft mit der Erstellung von
        Motivationsschreiben konfrontiert ob für eine Bewerbung für einen
        Arbeitsplatz, eines Forschungsfonds oder für Stipendien. Lange Zeit war
        dies eine sehr unangenehme Aufgabe verbunden mit viel Stress und
        Selbstzweifeln. In der Mitte des Bachelorstudiums war es mein großer
        Herzenswunsch ein Auslandssemester zu machen aber meine Noten waren
        nicht die Besten und würden nicht allein Überzeugungen. Also habe ich
        beschlossen mich den Motivationsschreiben zu stellen und einen Weg zu
        finden mit diesen die Jury zu überzeugen mir ein
        Auslandssemesterstipendium zu geben!
      </div>
    </div>
  )
}
