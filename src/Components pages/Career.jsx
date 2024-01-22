import React from 'react'

function Career() {

    const careerData = [{
        "id": 0,
        "position": "Senior Consultant in der prüfungsnahen Beratung von Banken und Finanzdienstleistern.",
        "focus": "Beratungsschwerpunkt: Bilanzierung und Bewertung von Handelsgeschäften sowie regulatorische Anforderungen an Handelsgeschäfte und das Risikomanagement.",
        "reference": [{
            "head": "Projektreferenzen:",
            "first": "Durchführung der Prüfung nach WpHG mit Schwerpunkt auf Algorithmischen Handel bei einer internationalen Investmentbank",
            "second": "Unterstützung eines Kreditinstituts als externer Mitarbeiter im Bereich Treasury sowie Beratung hinsichtlich der Optimierung des implementierten Prozessumfeldes"
        }],
        "date": "01.09.2022 bis heute"
    },{
        "id": 1,
        "position": "Assistent in der Wirtschaftsprüfung bei der Ernst & Young GmbH Wirtschaftsprüfungsgesellschaft im Bereich Assurance Banking",
        "reference": [{
            "head": "Tätigkeiten:",
            "description": "Durchführung der Jahresabschlussprüfung bei Großbanken, einer Privatbank sowie einer Leasinggesellschaft mit Fokus insbesondere auf:",
            "first": "Prüfung der handelsrechtlichen Abbildung von Handelsgeschäften nach HGB und IFRS einschließlich der einschlägigen Bewertungsvorschriften unter anderem für Festverzinsliche Wertpapiere, Aktien, OTC- sowie börsengehandelte Derivate und strukturierte Produkte.",
            "second": "Prüfung der Rechnungslegung nach HGB und IFRS unter anderem in den Bereichen Kreditgeschäft, Provisionsgeschäft, Leasingergebnis und Rückstellungen.",
            "third": "Beurteilung der Einhaltung von regulatorischen Anforderungen insbesondere in den Bereichen Handelsgeschäfte, Risikomanagement, Geldwäscheprävention, Compliance, Auslagerungen, Interne Revision und der CSDR Verordnung",
            "fourth": "Analyse und Prüfung des Prozessumfelds und der internen Kontrollsysteme insbesondere im Bereich Eigenhandel und Treasury"
        }],
        "date": "10/2019 bis 31.08.2022"
    },{
        "id": 2,
        "position": "Praktikum bei der Ernst & Young GmbH Wirtschaftsprüfungsgesellschaft im Bereich Assurance Banking",
        "reference": [{
            "head": "Tätigkeiten:",
            "description": " Unterstützung bei der Durchführung von Jahresabschlussprüfungen bei einem Kreditinstitut und einem Vermögensverwalter, insbesondere in den folgenden Bereichen:",
            "first": "Durchführung einer Krediteinzelfallprüfung",
            "second": "Prüfung der Einhaltung der Vorschriften aus dem Geldwäschegesetz und der MaRisk",
            "third": "Analyse und Prüfung des Prozessumfelds und der Internen Kontrollsysteme",
            "fourth": "Prüfung der Rechnungslegung nach HGB und IFRS insbesondere in den Bereichen Forderungen an Kunden, Anlagevermögen, allgemeiner Verwaltungsaufwand, Eigenkapital, sonstige Vermögensgegenstände, sonstige Verbindlichkeiten und Rückstellungen"
        }],
        "date": "11/2017 bis 03/2018"
    },
]

  return (
    <div className='careerMain'>
{/* <div className='careerHeadDiv'>
    <p>Capital Markets | Risk Management | Regulatory | Banking | Finance | Audit | Consulting </p>
</div> */}

<div className='careerContent '>
    {careerData.map((i,j) =>
        <div key={j} className='careerMap'>
            <h1>{i.position}</h1>
            {/* <p>{i.focus}</p> */}
            </div>
        )}
</div>

    </div>
  )
}

export default Career