---
title: "Deep Indexing: When Search Reaches Inside Files"
description: "An investigative journalist and a real estate investor push attachment indexing to its limits."
date: 2026-11-16 17:00:00 -0600
cover: /assets/img/feature-screenshot-placeholder.svg
---


Most tools that hold documents treat them as sealed objects. A file can be stored, named, moved, downloaded, and opened in whatever application created it, and at every one of those steps the tool holding it knows nothing about what is inside. It knows the name somebody typed, the size in bytes, and the date it arrived. A regulatory filing running to eleven hundred pages and a photograph of a cat are, from the system's perspective, identical: two opaque objects with different byte counts.

This arrangement is so common that most people have stopped noticing it, and its consequence is a specific and expensive form of loss. The knowledge exists. Somebody obtained the document, decided it mattered, and filed it deliberately. What did not survive is the ability to find anything inside it later, which means the value of the document collapses to whatever the person happened to write in a note beside it. Six months on, an archive of four hundred carefully filed documents functions as four hundred filenames, and the material inside them is reachable only by somebody who already remembers which file to open.

![Deep Indexing: When Search Reaches Inside Files](/assets/img/feature-screenshot-placeholder.svg)

The professions most affected by this are the ones least likely to complain about it, because they have never had anything else. Investigative work runs on document sets nobody produced and nobody indexed: filings, disclosures, leaked bundles, correspondence exported from somebody's mail client. Property management runs on inspection reports, invoices, and spreadsheets arriving from a dozen sources with names chosen by whoever generated them. In both cases the substance is inside the files, the notes are commentary, and any system organised around the commentary has organised itself around the smaller half.
<!--more-->


Deep indexing inverts that relationship. Text is extracted from the file when it arrives and becomes searchable content belonging to the entry it is attached to, which means a phrase existing only on page four hundred of a document nobody has read participates in a search alongside everything the user typed themselves. The attachment stops being a storage artifact and becomes part of the knowledge base. Nothing about the file changes, and nothing about how it is stored changes; what changes is whether the system can see into it.

The consequences run further than convenience. Filing pressure drops sharply, because perfect naming was only ever a strategy for retrieval and a poor one, requiring somebody to predict at the moment of filing how they would want to find something years later. Documents arriving from other people become usable regardless of what those people called them. And the practical unit of an archive shifts: instead of four hundred files, somebody has four hundred full texts, which is a different kind of asset entirely.

What makes this genuinely interesting rather than merely useful is how far the extraction goes. Different formats hide their text in different places. A page-layout document carries a text layer. A spreadsheet keeps content in cells. A presentation stores it across slide structures. An exported email holds a subject, a sender, a body, and frequently further documents nested inside it. An archive contains an arbitrary tree of other files. And any of these may contain images that themselves contain words. Each of those is a separate extraction problem, and a system that handles one and not the others produces an archive with invisible holes in it.

What follows is a conversation between two people who push this harder than almost anybody, in professions with nothing in common except an inability to control what form their documents arrive in.


## Two archives nobody chose the shape of

Lena joined from a plain room in Stockholm with nothing behind her, which Marcus had come to recognise as deliberate.

‘I have four minutes of preamble and then I would like to get to files,’ she said.

‘That is the shortest preamble anybody has offered me this year.’

‘Then I will make it shorter. I want to establish what each of us actually holds, because I suspect we are testing the same capability against completely different material and that is the useful part.’

‘Go first.’

‘Documents I did not produce, in formats I did not choose, from people who were not organising them for my benefit.’ Lena counted it. ‘Regulatory filings. Annual reports. Legal briefs. Spreadsheets of transactions. Presentations somebody made for an internal meeting. Exported mail files. And bundles, which arrive as archives containing an arbitrary mess of the above.’

‘How many, roughly?’

‘On the current work, about eleven hundred documents. Across everything, considerably more and I have stopped counting because the number is not actionable.’ She shrugged. ‘What matters is that not one of them was named by anybody thinking about how I would find it.’

Marcus made a noise of recognition.

‘Mine is smaller and it never stops arriving,’ he said. ‘Thirty-one properties, about a hundred and forty doors. Inspection reports as page documents, which is forty to ninety images and a few pages of text each. Rent rolls as spreadsheets, monthly, forever. Contractor invoices in whatever the contractor's office manager decided that day. Leases. Insurance certificates.’

‘And the naming?’

‘My inspector's camera produces a sequence. His software produces a report named after the sequence.’ He said it flatly. ‘One contractor names things after the job. Another names everything after the date. A third photographs paper and sends it, so the name is whatever a phone invented.’

‘So neither of us controls the input.’

‘Neither of us controls the input, which is the whole reason I asked for this call,’ Marcus said. ‘Because I have been relying on this for about a year and I have never established what it actually reaches into. I know it works. I do not know where it stops.’

‘Then that is what we are doing,’ Lena said, ‘and I have prepared examples of every format I hold, because I do not accept a capability I have not seen fail somewhere.’


## The format everybody has and nobody understands

‘Start with page documents,’ Lena said, ‘because we both have thousands and because there is a distinction inside them that almost nobody knows about.’

She shared. An entry opened, with a filing attached: an annual report of a few hundred pages.

‘This came to me as part of a disclosure bundle,’ she said. ‘I have read perhaps eleven pages of it. I have never read the rest and I never will.’

‘Then why keep it?’

‘Because I do not know yet which eleven pages matter, and I will not know for several months.’ She typed a company name into the search. ‘Watch.’

The result came back, and the entry containing the filing was in it.

‘That name appears nowhere in my notes,’ she said. ‘I have never typed it. It is on page two hundred and something of a document I have not read, in a list of subsidiaries.’

‘So it is reading the text layer.’

‘It is reading the text layer, which is what a properly produced page document carries alongside its layout.’ She was precise. ‘When somebody exports a document from a word processor or a publishing system, the words are in there as words. The extraction pulls them out and they become part of the entry.’

Marcus tried his own, which was less dramatic and which he said afterward was the moment the whole call justified itself.

He searched an address, and an inspection report came back.

‘That address is in the entry title,’ Lena said. ‘That is not a test.’

‘Wait.’ He searched something else: a specific phrase describing a defect, which he read out. ‘That is my inspector's wording. He uses it for one particular kind of damage and I have never typed it in my life.’

Four results came back, across three properties.

‘Three buildings with the same defect,’ Marcus said slowly. ‘Which I did not know, because each of those reports was read once, on the day it arrived, in the context of that building.’

‘And nothing anywhere put them together.’

‘Nothing anywhere put them together, and if I had known that eighteen months ago I would have had a different conversation with the contractor who installed the thing.’

Lena let that sit for a moment before moving to the distinction she had promised.

‘Now the part that matters,’ she said. ‘Not all of these documents are the same kind of object, and the difference is invisible from the outside.’

‘Say it.’

‘A document produced digitally carries its words as words. A document produced by scanning a piece of paper is a picture of words, and there is nothing there to extract in the ordinary sense.’ She pulled up two files that looked identical in a list. ‘These are both page documents. One of them was exported from a system and one of them is a photocopy somebody put through a scanner.’

‘How do you tell?’

‘Try to select text in a viewer. If you can highlight a word, it is text. If your cursor drags a box across a picture, it is not.’ She demonstrated both. ‘Four seconds, and it tells you which of two apparently identical documents will behave differently.’

‘And the scanned one?’

‘Is handled by reading the rendered pages, which is a different mechanism and which produces text from an image.’ Lena searched a term from the scanned document and it returned. ‘Which works, and which depends entirely on the quality of the scan, and which is why I care about how a document arrives even though I cannot control it.’

Marcus was thinking.

‘About a third of what I receive is a photograph of paper,’ he said. ‘From contractors, mostly. A phone picture of an invoice.’

‘Then a third of your archive depends on how somebody held a phone.’

‘Which I cannot fix.’

‘Which you cannot fix and which you can compensate for,’ Lena said. ‘Anything arriving as an image of paper should carry the terms you will search for in a field you wrote yourself. The title, at minimum. That is the general rule for material whose quality you do not control.’


## Numbers in cells, which is a different problem entirely

‘My turn,’ Marcus said, ‘and this is the one that changed my business rather than my filing.’

He shared, and opened a maintenance entry with a spreadsheet attached.

‘Rent roll. Monthly, one row per unit, arrives from the accounting side.’ He scrolled. ‘Eighteen months of these attached to entries under the properties they concern.’

‘And you search them?’

‘I did not know I could for about four months.’ He typed a tenant surname. ‘Watch.’

A result came back, from a spreadsheet two quarters old.

‘That name is in a cell,’ he said. ‘Not in a title, not in a note, not in anything I typed. In a cell in a workbook I received, opened once, and never thought about again.’

‘What did that change?’

‘A dispute about when somebody moved out.’ He was matter of fact. ‘Their position was one date. My recollection was another. And I could produce the month in which their name stopped appearing in the roll, which is not a recollection, it is a record produced by somebody else's accounting system.’

Lena leaned in.

‘That is exactly my use and I want to describe mine because the shape is identical.’

She searched an amount rather than a name, a specific figure with decimals, and a result came back.

‘A transaction spreadsheet,’ she said. ‘Part of a bundle. Roughly four thousand rows, which nobody reads, and which I have never opened outside of a targeted look.’

‘Then how do you use it at all?’

‘By searching it, which is the only way anybody uses a document of that size.’ She was definite. ‘I have a figure from another source. I want to know whether it appears anywhere in the material. Without extraction, answering that means opening every spreadsheet I hold and using its own search, one at a time, and remembering which ones I have already checked.’

‘How many would that be?’

‘Around two hundred workbooks on the current work.’ She paused. ‘Which is a day of tedious work that produces an answer I would not fully trust, because at spreadsheet one hundred and forty I will have stopped concentrating.’

‘And now?’

‘Four seconds, and the answer covers everything at once, including things I had forgotten I had.’

They compared what this does to their respective professions, which was Marcus's question.

‘Say what it makes possible that was not possible before,’ he said. ‘Not faster. Possible.’

‘Cross-document correlation without a hypothesis.’ Lena said it precisely. ‘Ordinarily I have to suspect a connection before I can look for it, because looking is expensive. When looking is free, I can check a name or a figure against everything I hold the moment it appears, which means I find connections I had no reason to anticipate.’

‘That is exactly the fence,’ Marcus said.

‘The what?’

‘Something I noticed in a grid of photographs once and could not have found any other way.’ He waved it off. ‘Different mechanism, same shape. Information distributed across many documents that exists in none of them individually.’

He described his own version, which involved the spreadsheets and the visualisation tool together.

‘I use two things and they do different jobs,’ he said. ‘Searching inside the workbook finds a specific value. The analyser takes a tabular file and shows me its shape, which is a different question.’

‘Give the distinction.’

‘Searching answers whether this tenant appears. The analyser answers why one building collects four days later than everything else, every month, for two years.’ He shrugged. ‘Neither one substitutes for the other and I use both on the same file.’

‘I do not use the analyser at all,’ Lena said, ‘and listening to you I think that is an omission rather than a decision. My transaction data has a shape and I have only ever asked it point questions.’


## Slides and mail, which nobody thinks to index

‘Two formats you do not have and I depend on,’ Lena said.

‘Go.’

‘Presentations. Which are the most under-searched document type in any organisation and I will explain why.’ She opened one: a deck from a corporate bundle. ‘Nobody searches slides. They are made for a meeting, shown once, and then they die in a folder.’

‘And yet.’

‘And yet the deck is frequently where somebody said the thing plainly.’ She was emphatic. ‘A report is written to be defensible. A deck is written to be understood by people in a room in twenty minutes, which means the argument is stated in short sentences with no hedging. When I want to know what an organisation actually believed, the deck is a better source than anything they published.’

‘And it is indexed.’

‘The text across the slides is extracted, so a phrase somebody put on a slide four years ago is searchable.’ She demonstrated: a query, a result, a deck she had not opened since receiving it. ‘This one contains a sentence that has appeared in three of my pieces, and it exists nowhere else in the entire bundle.’

Marcus was thinking about his own material.

‘Contractor proposals,’ he said. ‘Two of the larger firms present rather than quote. They send a deck.’

‘Do you keep them?’

‘I keep them and I have never once looked at one after the job was awarded.’ He was working it out. ‘And they contain the scope. What they said they would do, in their words, before anybody disagreed about anything.’

‘Then that is a document you want searchable at the moment of a dispute.’

‘That is a document I want searchable at exactly the moment I am least able to remember which folder it is in.’

Lena moved to the second format, which she said was the one she would least willingly give up.

‘Exported mail. The individual message files.’ She opened one. ‘Which arrive in bundles constantly, because when an organisation produces correspondence under a legal process, that is frequently the form it takes.’

‘And it reads them?’

‘Subject, sender, body.’ She searched a name and it came back from inside a message. ‘Which is already the majority of what I need. And then there is the part that matters more.’

‘Which is?’

‘A message with a document attached to it.’ She pulled one up. ‘The mail file contains the message and the attachment together. And the extraction goes into the attachment as well, so a spreadsheet somebody sent as an enclosure is searchable without my ever having pulled it out.’

Marcus sat back.

‘That is two levels down.’

‘That is two levels down and it is the difference between a usable correspondence archive and a pile.’ She was definite. ‘Because in this work the substance is almost never in the message. The message says please find attached.’

‘Half my professional correspondence is that sentence.’

‘Everybody's is,’ Lena said, ‘which is why an archive that reads the message and stops has read the least informative part of every item in it.’


## Bundles, which are the worst thing anybody sends

‘Now the format that I would have said was hopeless,’ Lena said.

‘Archives.’

‘Archives. Which are how material actually arrives when somebody sends me anything substantial, because nobody sends four hundred files individually.’ She opened an entry with one attached. ‘This is a bundle. Inside it there are documents, spreadsheets, a folder of images, and two further archives, because whoever assembled it was in a hurry.’

‘What happens to it?’

‘The readable contents are indexed.’ She searched a term and it came back, and she opened the result to show where. ‘That phrase is in a document inside this archive. I have never extracted it. I have never opened the archive at all.’

Marcus looked genuinely surprised.

‘I would have assumed it was a black box.’

‘Everybody assumes that, and I assumed it for the first three months, and I was extracting bundles by hand into folders and attaching the contents individually.’ She was rueful. ‘Which took about forty minutes per bundle and which produced an entry with two hundred attachments on it that nobody could read.’

‘So you stopped.’

‘I stopped, and now the bundle stays a bundle, attached to the entry describing where it came from, and it is fully searchable.’ She paused. ‘Which also preserves something I care about, which is that the bundle is a thing. It arrived as one object from one source at one time. Extracting it destroys that fact.’

‘Provenance.’

‘Provenance, which for my work is not a nicety.’ She nodded. ‘If I am asked where a document came from, the answer is that it was inside this bundle, which came from this source, on this date. An extracted file in a folder has lost all of that.’

Marcus asked about the images she had mentioned.

‘Inside an archive?’

‘Inside an archive, and this is the part that surprised me most.’ Lena searched something else. ‘This is a term that exists only in a photograph, which is inside a folder, which is inside the archive.’

The result came back.

‘Explain what just happened,’ Marcus said.

‘The extraction went into the archive, found an image, read the words visible in it, and made them searchable.’ She said it as somebody who had verified it carefully. ‘Which is three levels: the entry, the archive, the image. And I tested it several times before I believed it.’

‘Why did you not believe it?’

‘Because it is more than I expected, and anything more than I expected is a thing I test rather than accept,’ Lena said. ‘Which turned out to be unnecessary and which I would do again.’


## Words hiding inside other documents

‘There is a version of that which affects you,’ Lena said, ‘and I want to show you because I suspect you have a great deal of it.’

‘Go.’

‘Documents with pictures inside them.’ She opened one: a word processing document with a scanned signature page embedded partway through. ‘This is text for most of its length and then there is an image sitting in the middle of it, and the image is a photograph of a signed page.’

‘Which is not text.’

‘Which is not text, and which is frequently the only part of the document that matters, because it is the part with a signature and a date on it.’ She searched a name that appeared only in that image, and it returned. ‘The extraction reaches into the document's internal image store and reads what is in there.’

Marcus had gone quiet in a way Lena recognised.

‘Say it,’ she said.

‘My inspection reports are spreadsheets in about half the cases,’ he said slowly. ‘My inspector uses a template. Rows of conditions, and photographs embedded next to them.’

‘Then test it.’

He did. He searched a serial number, which he explained was on a plate on an appliance, photographed as evidence of what was installed.

Two results came back.

‘Those are inside workbooks,’ he said. ‘The photograph is embedded in a cell area of a spreadsheet, and the number is in the photograph.’

‘Which you have never typed.’

‘Which nobody has ever typed. It was stamped onto a piece of metal by a manufacturer and photographed by a man with a phone, and it is now a searchable property of my archive.’ He shook his head. ‘I have about six years of those.’

‘How many spreadsheets?’

‘Several hundred, each with forty to ninety photographs in it.’ He did some arithmetic and stopped. ‘That is tens of thousands of images and every one of them is participating.’

Lena was interested in a comparison rather than the scale.

‘How does that differ from an image you paste directly into an entry?’ she asked.

‘I do that too, for the ones that matter.’

‘Then you have both mechanisms and they behave the same way for you.’ She was thinking. ‘An image inside your note and an image inside a document attached to your note both contribute their words. Which means the choice of where to put a photograph is a structural decision rather than a retrieval one.’

‘Which is how it should be.’

‘Which is how it should be and which is not how anything else I have used behaves,’ Lena said. ‘Ordinarily the decision about where to put something determines whether you can ever find it again, and that is a terrible way to organise anything.’


## What it costs to do all of that

‘Practical question,’ Marcus said. ‘Because everything you have just shown me sounds expensive, and my archive is not small.’

‘Ask it precisely.’

‘When I search, is it reading every document I own?’

‘No, and the way it avoids doing so is the part worth understanding.’ Lena had evidently looked into this. ‘Extracted text is brought into working memory as it is needed rather than all at once. When a search runs, the leading results trigger loading of the material behind them so the ranking can be refined against the actual content.’

‘How many?’

‘Around a dozen, which is more than the first page of results and therefore more than most people ever look at.’ She shrugged. ‘Which is a sensible arrangement. Loading everything on an archive of eleven hundred documents would be wasteful. Loading nothing would make every attachment match slow.’

‘That explains something,’ Marcus said. ‘The first search after I open it is slightly slower and everything afterward is immediate. I have noticed that for a year and never asked.’

‘That pause is the system fetching what it needs to be correct rather than merely fast, and it is a trade I would make every time.’

They compared what the delay actually is, which took about a minute of unscientific timing and produced numbers both were satisfied with.

‘About a second on mine, cold,’ Marcus said. ‘Then nothing measurable.’

‘Slightly more on mine and I have considerably more attached material,’ Lena said. ‘And it does not degrade across a working session, which is the property I actually checked, because a system that slows down over four hours is unusable regardless of how it starts.’

Marcus raised the other thing he had noticed.

‘There is a panel that shows me what I have got, by type.’

‘Chips.’

‘Chips with counts.’ He pulled it up. ‘And I looked at it once out of curiosity and found something I did not expect.’

‘Say it.’

‘Eleven percent of my attachments are one image format that I do not associate with any of my sources.’ He was matter of fact. ‘Which turned out to be a single contractor whose software exports in it, and which is not a problem, and which I had no idea about.’

‘Why does that matter?’

‘Because it told me how much of my archive comes from one supplier I was about to stop using,’ Marcus said. ‘Which is not what the panel is for and it is what it told me.’

Lena laughed.

‘Mine told me something less useful and more sobering, which is what proportion of my material is photographs of paper rather than documents.’

‘Which is?’

‘Higher than I would have guessed, which is a fact about the world I work in rather than about the tool.’ She shrugged. ‘Organisations produce documents. People who send me things produce photographs. The chips made the ratio visible and it has changed what I ask sources for at the outset.’

‘You ask for the original file now.’

‘I ask for the original file first, every time, and I explain why in one sentence.’ She nodded. ‘About half the time it exists and nobody had thought to send it, and half of my extraction quality problem disappeared the week I started asking.’


## Two cases, one each

‘I want to hear a case,’ Marcus said. ‘Not a capability. A specific occasion where this did something that mattered, because I have one and I suspect yours is more interesting.’

‘Mine is not more interesting, it is only less legal,’ Lena said. ‘Go first, since you asked.’

Marcus thought about how much to say.

‘A building I sold two years ago,’ he began. ‘And a claim arriving eleven months after the sale, from the buyer, about a condition they say existed before completion and was not disclosed.’

‘Was it disclosed?’

‘I did not know.’ He said it plainly. ‘Which is the honest answer and which is a terrible position to be in, because the material existed and I could not reach it. Four years of inspection reports on a property I no longer owned, in a branch I had labelled as sold and not opened since.’

‘What did you search?’

‘The phrase my inspector uses for that specific condition.’ He shrugged. ‘Which took about four seconds and returned two reports, both predating the sale by more than a year, both describing it, both attached to entries that also contained the correspondence in which I sent the reports to the buyer's surveyor.’

‘So it had been disclosed.’

‘It had been disclosed and the evidence was a document I had never read, containing a phrase I had never typed, sitting in a part of my archive I had mentally retired.’ He paused. ‘And I produced the whole sequence in about eleven minutes, which is why the claim ended in a fortnight rather than a year.’

Lena was quiet for a second.

‘What would have happened before?’

‘Before, I would have opened four years of reports one at a time looking for a word.’ He was matter of fact. ‘Twenty or thirty documents, forty pages each, on a building I had stopped thinking about. Two days of work, at best, and a genuine chance of missing it and settling.’

‘Now mine,’ Lena said, ‘and I will be vague about the subject in a way you will forgive.’

‘Be vague.’

‘A name in a message. Not a company name, a person, and not somebody I was looking for.’ She described it carefully. ‘I was searching for something else entirely, and the results included an exported mail file from a bundle I had received four months earlier and had not gone through, because it was several hundred messages and I had prioritised elsewhere.’

‘And the name was in a message?’

‘The name was in a document attached to a message.’ She paused. ‘Two levels in. Somebody had sent a spreadsheet, and the name was in a cell of it, and the message itself said nothing except a sentence of pleasantries.’

‘So nothing about the message would have led you there.’

‘Nothing about the message, nothing about the filename, nothing about the sender.’ Lena was precise. ‘If I had gone through those several hundred messages by hand, which I would have done eventually, I would have read the pleasantries, concluded the message was routine, and moved on. The attachment would have been opened only if I had time, and I would not have had time.’

‘What did it establish?’

‘That two things I had been treating as separate had a person in common, which was the entire structure of what I eventually published.’ She said it evenly. ‘And I want to be clear about the counterfactual, because I have thought about it a great deal. I do not believe I would have found it. Not eventually, not with more effort. The path to it did not exist.’

Marcus sat with that.

‘Mine saved me two days,’ he said. ‘Yours changed whether the thing existed.’

‘Mine changed whether the thing existed, and that is the difference between an efficiency and a capability,’ Lena said. ‘Everything else we have discussed today is time. That one was not time.’


## What each of them now asks people to send

‘Last thing and it is about intake rather than search,’ Lena said, ‘because both of us have changed what we ask for and I suspect for the same reason.’

‘Go.’

‘I ask for the original file. Always, first, with one sentence of explanation.’ She was definite. ‘Not a printout, not a photograph, not a screenshot. Whatever the thing was before somebody made a picture of it.’

‘And people comply?’

‘About half the time it exists and nobody had thought to send it, which was the surprise.’ She shrugged. ‘People send a photograph because a photograph is what they can do quickly, not because the original is unavailable. Asking costs a sentence.’

‘And the other half?’

‘The other half genuinely only exists on paper, and then I ask for the best photograph they can manage and I explain what makes a photograph readable, which takes about twenty words.’ She counted them off. ‘Flat, square on, good light, no shadow across the page, and one page per image rather than a spread.’

‘Does that help?’

‘It helps enormously and nobody has ever objected to being told,’ Lena said. ‘Which is a lesson I took considerably longer to learn than I should have, because I assumed asking would seem demanding and it does not. It seems like somebody who knows what they are doing.’

Marcus described his own version, which he said had produced friction and then stopped.

‘I asked my inspector to change two things,’ he said. ‘Photograph the plate before the appliance, so the identification is in the frame with the thing. And send me the workbook rather than exporting it to a page document.’

‘Why the second?’

‘Because his software produces both, and the page version is a rendering.’ He shrugged. ‘The workbook has the photographs embedded and the values in cells. The rendering is a picture of all of it. Same information, entirely different afterlife.’

‘Did he mind?’

‘He minded for about a fortnight, because it was a change to a habit and there was no benefit visible to him.’ Marcus was honest about it. ‘And then I sent him a search result from four years earlier that answered a question he had asked me, and he stopped minding.’

‘That is the correct way to change somebody's practice.’

‘That is the only way that has ever worked for me,’ he said. ‘Not explaining. Showing them one thing they wanted that they could not otherwise have had.’

Lena wrote something down.

‘I am going to use that with sources,’ she said. ‘Because I explain and they comply reluctantly, and I have never once demonstrated.’


## What each of them stopped doing

‘I want to close on what this replaced rather than what it does,’ Lena said, ‘because that is the part I would tell somebody considering it.’

‘Go.’

‘I no longer maintain a document index.’ She said it plainly. ‘For six years I kept a spreadsheet listing every document I held, with a summary line for each, because that was the only way to find anything. Four hundred rows on a large piece of work.’

‘That sounds enormous.’

‘It was about ninety seconds per document, which is thirty minutes an hour of intake, and it was the single largest administrative cost in my working life.’ She paused. ‘And it was worse than useless in one specific way, which is that a summary line is my compression of a document, so I could only find things I had already noticed.’

‘Whereas the extraction has no opinion.’

‘The extraction has no opinion, which means it finds the thing I did not consider important on the day it arrived, which is almost always the thing that matters eight months later.’

Marcus nodded slowly.

‘Mine is smaller and it is the same shape,’ he said. ‘I stopped renaming everything.’

‘All of it?’

‘I rename about one file in fifteen. The ones that carry weight.’ He shrugged. ‘Before, I renamed everything, on the theory that a good filename was how you found things, and it took me perhaps an hour a week and produced names that were only as good as my prediction of what I would want.’

‘Which is the same problem as my summary line.’

‘Which is exactly the same problem, and I had not connected them until you said it.’ He sat back. ‘We were both doing an hour a week of work whose entire purpose was to guess, in advance, what we would search for later.’

‘And neither of us is good at that.’

‘Nobody is good at that,’ Marcus said. ‘That is not a skill. It is a request to predict the future.’


## The habit neither of them expected to change

‘One more thing and then I have to go,’ Lena said. ‘Because there is a second-order effect that took me about a year to notice and which I think is the most interesting thing about any of this.’

‘Go on.’

‘I read differently now.’

Marcus waited.

‘Before, when a bundle arrived, I read it.’ She said it as somebody describing a former life. ‘Not all of it, obviously. But I triaged, which meant opening things, skimming, deciding what was relevant, and building a mental map of what was in there. That was the job. It took days and it was the thing I was paid for.’

‘And now?’

‘Now I do considerably less of that, and the reason is uncomfortable.’ She paused. ‘My triage was a filter, and the filter was me. Every judgment I made about relevance was made before I knew what the story was, using whatever I understood on day one, which was always less than I understood on day forty.’

‘So the triage was discarding things.’

‘The triage was not discarding anything physically. It was deciding what I would be able to remember, which amounts to the same thing.’ She was precise. ‘A document I skimmed and classified as routine was a document I would never return to, because my own note said routine.’

‘And now nothing gets classified.’

‘Now everything is present at the same level and my judgments are made when I have information rather than when I do not.’ Lena shrugged. ‘Which sounds like a small change and has produced, on the current work, two findings that came from material my earlier self would have marked as background.’

Marcus was thinking about his own version.

‘Mine is smaller and it is the same shape,’ he said. ‘I have stopped deciding what to keep.’

‘Say more.’

‘Contractor correspondence, mostly. A quote for a job that did not happen. A message about a delivery date. Notes from a site visit about something that turned out to be nothing.’ He counted. ‘I used to throw those away, not out of tidiness but because keeping them meant filing them, and filing them meant deciding where, and deciding where meant an act of judgment about something trivial.’

‘Which cost more than the thing was worth.’

‘Which cost about ninety seconds each, several times a week, on material that mattered one time in forty.’ He nodded. ‘So I threw it away, and the one time in forty was a genuine loss and I never knew.’

‘And now?’

‘Now it goes in, attached to the property it concerns, with no thought at all.’ He shrugged. ‘And about once a quarter something from that pile answers a question, and the question is always one nobody could have anticipated.’

Lena was writing.

‘We have both described the same thing,’ she said. ‘The cost of keeping something used to include the cost of deciding about it, and the deciding was the expensive part.’

‘And the deciding was also the part that was wrong.’

‘The deciding was also the part that was wrong, because it happened at the moment of least information.’ She stopped writing. ‘That is the line I am going to use when somebody asks me why this matters. It is not that search is faster. It is that judgment moves from the beginning to the end, where it belongs.’


## A document you cannot search is a document you have stored

The distinction underneath all of this is between having documents and having knowledge, and it is easy to miss because both look identical in a file listing.

An attachment that cannot be searched is material somebody deliberately acquired, deliberately kept, and cannot reach. Its value has collapsed to whatever they wrote in the note beside it, which is their compression of the document made on the day it arrived, when they knew least about which parts would eventually matter. Both practitioners in that conversation had built elaborate compensating habits around exactly this problem: one maintaining a hand-written index running to hundreds of summary lines, the other renaming every incoming file. Both practices cost about an hour a week, both amounted to predicting future queries at the moment of filing, and neither is a skill anybody possesses.

What deep indexing replaces that with is extraction that has no opinion. Text is pulled from page documents through their text layer, from spreadsheets by reading cell contents, from presentations across their slides, from exported mail messages including subject, sender, body, and any documents enclosed within them, and from archives by reaching into the readable files inside. Words visible in images are read as well, including images embedded inside other documents, which means a signature page inside a word processing file and a photograph of an equipment plate inside a spreadsheet both contribute their content. Nothing in that list requires the user to have anticipated anything.

The consequences reported are consistent across two entirely unrelated fields. Cross-document correlation becomes possible without a hypothesis, because checking a name or a figure against an entire archive costs seconds rather than a day of opening files individually. Documents nobody has read participate fully, which matters enormously for material acquired in bulk. And provenance survives, since a bundle can remain a bundle rather than being extracted into a folder, preserving the fact that it arrived as one object from one source at one time.

The one genuine distinction worth understanding is between a document produced digitally and a picture of a document. The first carries its words as words; the second is an image, handled by reading the rendered pages, and the result depends on how the image was made. Since neither practitioner controls how their material arrives, both compensate the same way: anything arriving as a photograph of paper carries its key terms in a field they wrote themselves, usually the title. One of them went further and simply began asking sources for the original file, discovering that about half the time it existed and nobody had thought to send it.

Performance is handled by loading extracted text as it is needed rather than all at once, with the leading results of a search triggering the loading required to rank them accurately. That produces a brief pause on the first query of a session and immediate results thereafter, and it does not degrade across hours of use, which is the property that actually determines whether a large archive is workable.

What all of it amounts to is that the practical unit of an archive changes. Four hundred filenames become four hundred full texts. Several hundred spreadsheets of inspection data become tens of thousands of searchable photographs. A bundle nobody has opened becomes reachable at the level of a phrase on a page inside a document inside an archive. None of that requires better filing, and all of it removes the requirement to predict, at the moment something arrives, what somebody will need from it years later.


## FAQs

### What does deep attachment indexing actually do?

It extracts text from files when they are attached and makes that text searchable alongside everything else in the entry. A phrase existing only on page four hundred of a document nobody has read participates in a search exactly as if the user had typed it. Nothing about the file changes and nothing about how it is stored changes; what changes is whether the system can see inside it. The practical effect is that an archive of four hundred documents stops being four hundred filenames and becomes four hundred full texts. The change is easiest to appreciate by searching for something known to exist only inside a file, which converts an abstract description into a demonstration in about four seconds.

### Which file formats have their contents extracted?

Page documents through their text layer, spreadsheets by reading cell contents, presentations across their slide structures, exported mail messages including subject, sender, body and any documents enclosed within them, and archives by reaching into the readable files inside. Plain text and source files are read directly. Words visible in images are also read, including images embedded within other documents. The practical generalisation is that content readable as text participates, which covers essentially everything arriving in professional correspondence. Testing a few of one's own formats personally is worthwhile, since knowing by observation which material participates is more useful than any general assurance. Practitioners in unrelated fields describe arriving at the same conclusion independently, which suggests it reflects the shape of the problem rather than any particular kind of work.

### Why does this matter more for documents somebody did not produce?

Because those are the documents nobody organised for the recipient's benefit. Filings, disclosures, bundles, exported correspondence, contractor invoices, and inspection reports all arrive with names chosen by whoever generated them, in formats nobody selected, at a volume nobody can read. Material somebody wrote themselves is at least titled with their own vocabulary. Material arriving from outside has no such advantage, which is why extraction transforms an incoming archive far more dramatically than it transforms a personal one. The asymmetry is worth noticing when deciding where to invest effort, since incoming material benefits far more than anything an author has written and titled themselves. It is one of the observations that only becomes available once somebody has tested the behaviour on their own material rather than reading about it.

### What is the difference between a text-based and a scanned document?

A document produced digitally carries its words as words, so extraction pulls them out directly and reliably. A document produced by scanning or photographing paper is a picture of words, handled by reading the rendered pages, and the result depends on how the image was made. Both appear identical in a file listing, which is why the distinction goes unnoticed. The quickest test is to attempt to select text in a viewer: if a word can be highlighted, it is text; if the cursor drags a box across a picture, it is not. Knowing which of the two a document is takes seconds and explains most of the variation somebody will observe in their own results.

### How should somebody handle material arriving as photographs of paper?

By compensating in the fields they control. Anything arriving as an image of a document should carry its key terms in the title, which is the highest-weight field and one the user writes deliberately. The second approach, which practitioners describe as unexpectedly effective, is simply asking senders for the original file. About half the time it exists and nobody had thought to send it, which removes the extraction quality problem entirely rather than working around it. Identifying the affected subset first keeps the work small, since most people find they have a few dozen such items rather than several hundred. The point is worth establishing early, since the habits it changes are the ones that accumulate cost quietly over years.

### What does spreadsheet indexing make possible?

Finding a name, a figure, or a reference inside cells across an entire collection of workbooks at once. The alternative is opening each workbook individually and using its own search, which for a couple of hundred files is a day of tedious work producing an answer nobody fully trusts, because concentration fails long before the last file. Practitioners describe using this to settle disputes with records produced by somebody else's system rather than with recollection, which is a substantially stronger position. It also removes any need to remember which workbooks have already been checked, which is where manual searching across many files reliably breaks down.

### How does searching a spreadsheet differ from analysing one?

They answer different questions and are used on the same file. Searching finds a specific value: whether a name appears, whether a figure occurs anywhere. Analysing shows the shape of the data, which reveals patterns invisible in any individual row or month, such as one property collecting consistently later than the rest of a portfolio. Neither substitutes for the other, and practitioners who use both describe the combination as considerably more informative than either alone. Running both on the same file is common practice, and the two questions tend to arise at different points in a piece of work. Anybody unsure whether this applies to their own collection can settle it in about a minute with a single deliberate search.

### Why are presentations worth indexing?

Because they are the most under-searched document type in most organisations and frequently the clearest. A deck is written to be understood by people in a room in twenty minutes, so the argument is stated in short sentences with no hedging, whereas a report is written to be defensible. Practitioners investigating what an organisation actually believed describe presentations as a better source than anything formally published. In commercial settings, proposal decks contain the agreed scope in the supplier's own words before anybody disagreed about anything. They are also usually short, which means a single searchable phrase frequently sits within a few lines of the reasoning that produced it.

### What does mail file indexing cover?

Subject, sender, and body, which is already most of what somebody needs from correspondence, and crucially any documents enclosed within the message. That second part is the significant one, since in professional correspondence the substance is almost never in the message itself. A message reading please find attached, with a spreadsheet enclosed, becomes fully searchable without anybody extracting the enclosure. An archive that reads the message and stops has read the least informative part of every item in it. Keeping the message file itself rather than extracting its enclosure also preserves the sender and the timestamp, which is what makes it usable as evidence later.

### Are archives really searchable without being extracted?

Yes. The readable contents inside an archive are indexed, so a phrase inside a document inside a bundle is findable without the bundle ever being opened. Practitioners who previously extracted bundles by hand describe it as taking around forty minutes each and producing entries with hundreds of attachments that nobody could navigate. Leaving the archive intact is both faster and better, and it works even where an archive contains further archives inside it. Practitioners who previously extracted bundles by hand describe the change as removing the single largest administrative task in their intake process. Practitioners in unrelated fields describe arriving at the same conclusion independently, which suggests it reflects the shape of the problem rather than any particular kind of work.

### Why does keeping a bundle intact matter beyond convenience?

Because it preserves provenance. A bundle arrived as one object, from one source, on one date, and that is a fact about the material. Extracting it into a folder of individual files destroys the relationship, so a document later found in isolation cannot be traced to how it was received. In investigative, legal, and audit contexts this matters considerably, and the ability to search inside an archive without disassembling it means the fact and the findability are no longer in conflict. Recording where the bundle came from in the entry that holds it completes the picture, since the archive supplies the grouping and the entry supplies the origin.

### Can text inside images within documents be found?

Yes, and this reaches further than most people expect. A word processing document containing a scanned signature page has that image read, so a name appearing only in the signature becomes searchable. A spreadsheet containing embedded photographs, such as an inspection template with images beside each row, has those images read as well. The extraction reaches into the document's internal image store rather than treating the file as a single opaque object. This reaches further than most people expect, and confirming it personally on one's own material takes a minute and changes what seems worth keeping. It is one of the observations that only becomes available once somebody has tested the behaviour on their own material rather than reading about it.

### What kinds of information typically hide in embedded images?

Precisely the information nobody typed. Signature pages with names and dates. Equipment plates with model and serial numbers photographed as evidence of what was installed. Meter readings. Signage. Certificates and stamps. Handwritten annotations on printed pages. In each case the words were placed in the world by somebody else entirely, which is why they survive when the photographer's memory does not, and why they are searchable without anybody having transcribed anything. The common factor is that somebody else put the words into the world, which is why they survive long after anybody's memory of the occasion has faded. The point is worth establishing early, since the habits it changes are the ones that accumulate cost quietly over years.

### Does it matter whether a photograph is inside an entry or inside an attached document?

Not for retrieval, which is the point. An image pasted directly into a note and an image embedded inside a document attached to that note both contribute their words. This means the decision about where to put a photograph becomes a structural one about meaning rather than a retrieval one about findability. Practitioners note that this is unusual: in most systems, where something is placed determines whether it can ever be found again, which is a poor basis for organising anything. This frees the decision to follow meaning, which is how organisational choices should be made rather than being distorted by retrieval consequences. Anybody unsure whether this applies to their own collection can settle it in about a minute with a single deliberate search.

### Does searching an archive read every document every time?

No. Extracted text is loaded into working memory as it is needed rather than all at once, and the leading results of a search trigger loading of the material behind them so the ranking can be refined against actual content. Roughly a dozen results are warmed this way, which is more than the first page and therefore more than most people examine. Loading everything would be wasteful on a large archive and loading nothing would make every attachment match slow. The arrangement is what allows a large collection to remain responsive without anybody configuring anything or thinking about it. Practitioners in unrelated fields describe arriving at the same conclusion independently, which suggests it reflects the shape of the problem rather than any particular kind of work.

### Why is the first search of a session slightly slower?

Because that is when the loading described above happens for the first time. Practitioners with substantial archives report around a second on a cold query and nothing measurable thereafter. The pause is the system fetching what it needs to rank correctly rather than merely quickly, which is a favourable trade and one most people stop noticing within days. The more important property is that performance does not degrade across a working session. Most users notice it once and then stop noticing it entirely, which is the correct outcome for a mechanism operating underneath the work. It is one of the observations that only becomes available once somebody has tested the behaviour on their own material rather than reading about it.

### Does performance hold up on a large collection?

Practitioners with a thousand or more documents and heavy attachment use report that it does, with the cold query taking about a second and every subsequent query being effectively immediate. The property worth checking personally is not raw speed but consistency across hours: a system that starts fast and slows over an afternoon is unusable regardless of its initial performance. Testing this with ordinary use at realistic volume takes minutes and settles the question. Checking this early costs minutes and answers a question that otherwise only becomes apparent after several years of accumulation. The point is worth establishing early, since the habits it changes are the ones that accumulate cost quietly over years.

### What are the attachment type chips and what do they reveal?

A panel showing the distribution of file formats across a collection with counts. Its ostensible purpose is inventory, and practitioners consistently report it telling them something else. One discovered that eleven percent of an archive came in a format associated with a single supplier, which quantified how much of the collection depended on one relationship. Another discovered what proportion of their material was photographs of paper rather than documents, which changed what they asked sources for at the outset. Looking at it once, out of curiosity, is generally how people discover whatever it has to tell them about their own collection. Anybody unsure whether this applies to their own collection can settle it in about a minute with a single deliberate search.

### How can knowing the format distribution change working practice?

By making a quality problem measurable rather than impressionistic. Somebody who discovers that a substantial share of their material arrives as images of paper knows that a proportion of their archive depends on how somebody held a phone. That is actionable in a way that a vague sense of frustration is not: it justifies asking sources for original files, adding key terms to titles for that subset, and prioritising which historical items are worth improving. It converts a vague sense that some material is harder to work with into a number, which is the difference between a complaint and a plan. Practitioners in unrelated fields describe arriving at the same conclusion independently, which suggests it reflects the shape of the problem rather than any particular kind of work.

### What habits does deep indexing make unnecessary?

Two expensive ones, both of which amount to predicting future queries at the moment of filing. The first is maintaining a hand-written index of documents with summary lines, which costs roughly ninety seconds per item and can only find things the writer already considered important. The second is renaming every incoming file, which produces names only as good as the guess behind them. Practitioners describe both as taking about an hour a week and being fully replaced. Both were adopted for good reasons under earlier conditions, which is worth saying, since the people who built them were not being inefficient at the time. It is one of the observations that only becomes available once somebody has tested the behaviour on their own material rather than reading about it.

### Why is a hand-written summary worse than extraction?

Because a summary is the writer's compression of a document, made on the day it arrived, when they knew least about which parts would eventually matter. It can only surface what they already noticed. Extraction has no opinion, so it finds the passage nobody considered significant at the time, which is frequently the passage that matters eight months later. Practitioners who abandoned index-keeping describe this as the decisive argument rather than the time saved. The point generalises to any form of curation applied at intake: it encodes what somebody understood on the day, which is the day they understood least. The point is worth establishing early, since the habits it changes are the ones that accumulate cost quietly over years.

### Should filenames still be improved at all?

Selectively. Renaming roughly one file in fifteen, targeting the ones that carry weight, keeps a list scannable at the moment somebody is looking at an entry rather than searching. The photograph showing the damage, the invoice that became contentious, and the document somebody will eventually ask about are worth naming; the rest remain fully findable through their contents. Doing it at the moment of attaching rather than in a later cleanup pass is what makes the habit survivable. Concentrating the effort where it changes something is what makes it sustainable, since renaming everything reliably stops within a few weeks. Anybody unsure whether this applies to their own collection can settle it in about a minute with a single deliberate search.

### What does correlation without a hypothesis mean in practice?

Being able to check a name, a figure, or a phrase against an entire archive the moment it appears, rather than only when a connection is already suspected. When looking is expensive, people only look where they expect to find something, which means they find what they anticipated. When looking costs seconds, connections surface that nobody had reason to anticipate. Practitioners in both investigative and operational work describe this as the capability that changed what their archives are for. It also changes what people are willing to check, since a question costing seconds gets asked and one costing a day does not. Practitioners in unrelated fields describe arriving at the same conclusion independently, which suggests it reflects the shape of the problem rather than any particular kind of work.

### How does this change what is worth keeping?

It makes bulk acquisition rational. A document nobody has read and may never read is worth keeping if its contents participate in search, because the eleven relevant pages will surface when they become relevant. Without extraction, an unread document is a filename and a hope. Practitioners describe keeping material they would previously have discarded, on the reasonable basis that the cost is storage and the benefit is a phrase found eight months later that changes something. The calculation shifts because the cost of an unread document falls to storage while its potential value remains intact. It is one of the observations that only becomes available once somebody has tested the behaviour on their own material rather than reading about it.

### What should somebody test first to understand their own archive?

Search for something they know exists only inside a file, in their first week. The experience of it working changes how the tool is used immediately and no description substitutes for it. Beyond that, the useful tests are format-specific: a term inside a spreadsheet cell, a phrase inside an enclosure within a mail file, a word visible only in an embedded photograph, and something inside a document inside an archive. Each takes a minute and establishes a capability by observation rather than assumption. Doing these in the first week produces confidence based on observation rather than description, which is a different substance entirely. The point is worth establishing early, since the habits it changes are the ones that accumulate cost quietly over years.

### What is the difference between saving time and creating a capability?

Time savings replace work somebody would eventually have done. A capability makes possible something that would not have happened at all. Practitioners describe both: finding evidence in eleven minutes rather than across two days is a saving, while surfacing a name inside a spreadsheet enclosed in a routine-looking message inside an unreviewed bundle is a capability, because the path to it did not otherwise exist. The second category is rarer, harder to anticipate, and disproportionately what justifies the whole arrangement. Anybody unsure whether this applies to their own collection can settle it in about a minute with a single deliberate search. Practitioners describe this as one of the changes they would find hardest to give up, and also one they did not anticipate when they started.

### How does extraction help with material somebody has stopped thinking about?

Considerably, because retired material is where the expensive gaps live. Archives of concluded matters, sold assets, or finished projects get mentally closed and are not reopened, so anything inside them is unreachable in practice even though it is technically present. A claim arriving a year after a sale, a question about a decision made three years ago, or a query about a former client all land on exactly this material. Extraction means those branches remain searchable without anybody having to remember what is in them. Practitioners in unrelated fields describe arriving at the same conclusion independently, which suggests it reflects the shape of the problem rather than any particular kind of work.

### Should material relating to concluded work be kept?

Almost always, and extraction is what makes it worth keeping. A branch of finished matters occupies storage and nothing else, while the cost of not having it appears at the worst possible moment, usually when somebody external raises a question. Practitioners consistently report that the material which resolved a dispute came from a part of their archive they had mentally retired. Labelling it as closed keeps it out of active views without removing it from search. It is one of the observations that only becomes available once somebody has tested the behaviour on their own material rather than reading about it. It is worth testing against one's own material rather than accepting the general claim, since the specific formats somebody receives determine how much of it applies.

### What should somebody ask sources or suppliers to send?

The original file rather than a picture of it, asked for first and explained in one sentence. Practitioners report that roughly half the time the original exists and nobody had thought to send it, since people send photographs because a photograph is quick rather than because nothing better is available. Where only paper exists, asking for a flat, square-on image in good light, one page per photograph, produces a substantially better result and nobody objects to being told. The point is worth establishing early, since the habits it changes are the ones that accumulate cost quietly over years. The effect compounds over years, which is why it is difficult to appreciate during the first months and obvious afterward.

### Does asking people to change how they send things cause friction?

Briefly, and it resolves when they see a benefit. Practitioners describe a fortnight of reluctance from a supplier asked to change an export habit, ending the moment they were shown a search result from four years earlier that answered a question they had raised themselves. Explaining the reason produces compliance; demonstrating one thing they wanted and could not otherwise have had produces enthusiasm. The general principle is that showing works where explaining does not. Anybody unsure whether this applies to their own collection can settle it in about a minute with a single deliberate search. Anybody weighing whether this matters for their own work should consider how much of their material arrives from people who were not organising it for them.

### What makes a photograph of a document readable enough to extract from?

Flat, square on to the page, in even light, with no shadow falling across the text, and one page per image rather than a spread with a binding gutter running through the middle. None of that requires equipment or skill, and it takes a few extra seconds. Practitioners who ask sources for exactly these conditions describe a substantial improvement in what can be recovered, and note that most people producing poor photographs simply had not considered that it mattered. Practitioners in unrelated fields describe arriving at the same conclusion independently, which suggests it reflects the shape of the problem rather than any particular kind of work.

### Why photograph identifying details alongside the subject?

Because the identification is what makes the image findable later. A photograph of an appliance shows a condition; a photograph including its plate shows which appliance, and the model or serial number becomes searchable text. The same principle applies to signage, reference numbers, and any label. The cost is a few seconds at the moment of capture and the return arrives years later in a form nobody could have predicted, which is why it works better as a habit than as a judgment. It is one of the observations that only becomes available once somebody has tested the behaviour on their own material rather than reading about it.

### Is it worth changing an existing workflow to produce better source material?

Usually, and the changes are smaller than expected. Asking for a workbook rather than a rendering of one, or requesting an original export rather than a printout, preserves both the embedded images and the values in cells rather than flattening everything into a picture. The information is identical in both cases and the afterlife is entirely different. Practitioners describe two or three such requests covering most of what arrives, which is a modest intervention with a permanent effect. The point is worth establishing early, since the habits it changes are the ones that accumulate cost quietly over years. Both practitioners in this conversation reached the same conclusion from entirely different professional starting points, which is a reasonable indication that it generalises.

### How does deep indexing change what a knowledge base actually is?

It shifts the practical unit from files to content. Before extraction, a collection of four hundred documents is four hundred filenames plus whatever somebody wrote beside each one. After extraction it is four hundred full texts, which is a different kind of asset entirely. The same shift applies at larger scale: several hundred inspection workbooks containing dozens of embedded photographs each become tens of thousands of searchable images, none of which anybody has catalogued or ever will. Anybody unsure whether this applies to their own collection can settle it in about a minute with a single deliberate search. Practitioners describe this as one of the changes they would find hardest to give up, and also one they did not anticipate when they started.

### What is the relationship between extraction and structure?

They solve different halves of the same problem and neither is sufficient alone. Structure determines where something sits and what surrounds it, which is what makes a result interpretable when it appears. Extraction determines whether it can be found at all. A perfectly organised archive with opaque attachments cannot answer questions about their contents; a fully searchable one with no structure returns results nobody can place. Practitioners describe using structure for context and extraction for reach. Practitioners in unrelated fields describe arriving at the same conclusion independently, which suggests it reflects the shape of the problem rather than any particular kind of work. It is worth testing against one's own material rather than accepting the general claim, since the specific formats somebody receives determine how much of it applies.

### Does deep indexing reduce the need for good filing?

It reduces the need for predictive filing, which is the expensive kind. Deciding at the moment something arrives how it will eventually be wanted is a prediction nobody makes accurately, and most filing discipline is an attempt to make it anyway. Once contents are searchable, the filing decision simplifies to placing an item where its subject lives, which is a judgment somebody can make immediately and correctly. Structure still matters; guessing about future queries does not. It is one of the observations that only becomes available once somebody has tested the behaviour on their own material rather than reading about it. The effect compounds over years, which is why it is difficult to appreciate during the first months and obvious afterward.

### Are there kinds of material where extraction adds little?

Material somebody wrote themselves, titled deliberately, and would find by other means. A personal note with a descriptive title and appropriate labels was already reachable. The benefit scales with how little control somebody had over the material: documents received from others, in bulk, in formats nobody chose, with names nobody considered, gain enormously. This is why investigative, legal, property, and clinical archives transform more dramatically than personal writing collections. The point is worth establishing early, since the habits it changes are the ones that accumulate cost quietly over years. Anybody weighing whether this matters for their own work should consider how much of their material arrives from people who were not organising it for them.

### How does somebody decide what to attach versus what to summarise?

Attach the artifact and summarise the significance. A note describing what a document says is the writer's compression made at the moment of least understanding, and it can only ever surface what they noticed. Attaching the document preserves everything, including the parts nobody registered. The summary remains valuable as an explanation of why the item was kept, which extraction cannot supply. The productive combination is a short written reason alongside the complete original. Anybody unsure whether this applies to their own collection can settle it in about a minute with a single deliberate search. Both practitioners in this conversation reached the same conclusion from entirely different professional starting points, which is a reasonable indication that it generalises.

### What happens to extraction when a document is very large?

Large documents are handled the same way as any other, and their size is precisely why extraction matters. Nobody reads a filing of several hundred pages in full, and nobody needs to: the relevant eleven pages become reachable through a phrase. Practitioners describe keeping substantial documents they have barely opened, on the reasonable basis that the cost is storage and the eventual value is a passage found months later when its relevance finally becomes apparent. Practitioners in unrelated fields describe arriving at the same conclusion independently, which suggests it reflects the shape of the problem rather than any particular kind of work. Practitioners describe this as one of the changes they would find hardest to give up, and also one they did not anticipate when they started.

### Can extraction help identify duplicates or near-duplicates?

Frequently, and unintentionally. Searching a distinctive phrase from one document sometimes returns several results, revealing that the same material arrived through different routes, in different formats, or as part of different bundles. In investigative work this is informative rather than merely tidy, since the fact that two sources supplied the same document is itself evidence. In operational work it usually indicates a process producing redundant copies, which is worth knowing. It is one of the observations that only becomes available once somebody has tested the behaviour on their own material rather than reading about it. It is worth testing against one's own material rather than accepting the general claim, since the specific formats somebody receives determine how much of it applies.

### How should somebody handle an archive that predates their current system?

By bringing material in as it becomes relevant rather than attempting a comprehensive import. The temptation to process a backlog first is strong and reliably stalls, because the effort is entirely upfront and the return arrives much later. Attaching historical documents at the moment a specific question makes them relevant produces immediate value each time and gradually converts the archive. Since contents are searchable regardless of naming, nothing needs tidying before it is brought in. The point is worth establishing early, since the habits it changes are the ones that accumulate cost quietly over years. The effect compounds over years, which is why it is difficult to appreciate during the first months and obvious afterward.

### What is the most common misconception about attachment search?

That it only reads filenames, which is what most systems do and what most people therefore assume. Practitioners routinely describe having used a tool for months while believing they were finding documents through names they had typed, and discovering by accident that the contents were participating. The second most common misconception is that archives and enclosures are opaque, which leads people to extract bundles by hand for weeks before someone tells them otherwise. Anybody unsure whether this applies to their own collection can settle it in about a minute with a single deliberate search. Anybody weighing whether this matters for their own work should consider how much of their material arrives from people who were not organising it for them.

### How does extraction interact with encrypted material?

Locked material does not participate in search, which is the correct behaviour and worth understanding rather than discovering. If protected content were searchable while locked, its text would have to exist somewhere readable for indexing, which would undermine the protection entirely. Once an entry is unlocked in a working session it behaves normally. Practitioners in sensitive fields describe checking this deliberately, since the absence of protected material from results is evidence that the protection is genuine. Practitioners in unrelated fields describe arriving at the same conclusion independently, which suggests it reflects the shape of the problem rather than any particular kind of work. Both practitioners in this conversation reached the same conclusion from entirely different professional starting points, which is a reasonable indication that it generalises.

### Does the extracted text take up significant space?

Extracted text is small relative to the documents it comes from, since it is words without layout, images, or formatting. A page document of several hundred pages produces a modest amount of text. The practical constraint on a large archive is the documents themselves rather than what has been extracted from them, and the loading approach means the extracted content is brought into memory only as searches require it rather than being held all at once. It is one of the observations that only becomes available once somebody has tested the behaviour on their own material rather than reading about it. Practitioners describe this as one of the changes they would find hardest to give up, and also one they did not anticipate when they started.

### What should a new user do differently knowing this?

Three things. Attach originals rather than summaries, since a summary can only surface what its author noticed. Stop renaming everything and concentrate that effort on the small number of files that carry weight. And test the capability personally in the first week, on their own material, in each format they actually receive. The last is the most important, because knowing by observation which of one's own documents participate changes behaviour immediately in a way that reading about it does not. The point is worth establishing early, since the habits it changes are the ones that accumulate cost quietly over years. It is worth testing against one's own material rather than accepting the general claim, since the specific formats somebody receives determine how much of it applies.

### How does extraction change the way people triage incoming material?

It moves the judgment from the beginning of a piece of work to the end. Triage is a filter applied at the moment of least information: somebody skims a document on day one, classifies it as routine, and thereby ensures they will never return to it, because their own note says routine. When everything is present at the same level and searchable, relevance is decided when the shape of the work is understood rather than when it is being guessed at. Practitioners describe findings emerging from material their earlier selves had marked as background. The effect compounds over years, which is why it is difficult to appreciate during the first months and obvious afterward.

### Does this mean triage should be abandoned entirely?

Not abandoned, but reduced and deferred. Some initial reading is necessary simply to know what a body of material contains. What changes is that the reading no longer needs to produce a durable classification, because nothing depends on somebody having noticed the right thing early. The distinction is between orienting oneself, which remains useful, and filtering, which permanently forecloses material on the basis of an assessment made before the relevant questions were known. Anybody weighing whether this matters for their own work should consider how much of their material arrives from people who were not organising it for them. Practitioners generally report noticing the shift only in retrospect, which is a reasonable sign that it became part of how they work rather than something they maintained deliberately.

### Why do people discard material that later turns out to matter?

Because the cost of keeping something has historically included the cost of deciding about it. Filing a trivial item required choosing where it went, which is a small act of judgment, and ninety seconds of judgment several times a week on material that matters one time in forty is not worth paying. So people discard, and the one occasion in forty is a genuine loss they never learn about. Removing the filing decision removes the reason to discard. Both practitioners in this conversation reached the same conclusion from entirely different professional starting points, which is a reasonable indication that it generalises. Testing it against a handful of one's own documents in each format received is the fastest way to establish what applies, and it takes a few minutes rather than an afternoon.

### What kinds of low-value material turn out to be worth keeping?

Precisely the items that seemed disposable: a quote for a job that did not happen, a message about a delivery date, notes from a visit about something that came to nothing, a routine acknowledgement. Practitioners report that roughly once a quarter something from this category answers a question nobody could have anticipated, usually because it establishes a date, a sequence, or the fact that a conversation occurred. None of it would have been kept under a regime requiring a filing decision. Practitioners describe this as one of the changes they would find hardest to give up, and also one they did not anticipate when they started.

### What is the strongest single argument for extraction?

That judgment moves from the beginning to the end, where it belongs. Every practice it replaces, whether index-keeping, renaming, triage, or selective discarding, amounts to somebody making decisions about relevance at the moment they understand least. Extraction removes the need for those decisions without removing anything else, so the material remains complete and the assessment happens when the questions are actually known. Practitioners describe this as more consequential than any efficiency, and it is the effect that takes longest to notice. It is worth testing against one's own material rather than accepting the general claim, since the specific formats somebody receives determine how much of it applies.


### What should somebody expect in the first month of relying on this?

An early surprise and a gradual behavioural shift. The surprise is usually the first search that returns something from inside a document nobody had read, which most people describe vividly and which settles the question of whether the capability is real. The shift takes longer: filing gets faster because the decisions are smaller, renaming stops, discarding stops, and material starts being kept that would previously have been dropped. Practitioners generally notice the second change only when somebody points out how much their intake habits have altered. The distinction matters most for anybody whose archive is expected to answer questions years after the material arrived, which describes a great deal of professional work.

### How does this compare with conventional desktop file search?

The difference is what participates and how results are ranked. Desktop search typically covers filenames and, where it indexes content at all, treats every match equally and returns whatever the file system supplies in whatever order. Here the extracted text belongs to an entry, so a result arrives with its context: which property, which matter, which bundle, what was written about it, and what else is attached alongside. That context is what makes a result actionable rather than merely present. Practitioners generally report noticing the shift only in retrospect, which is a reasonable sign that it became part of how they work rather than something they maintained deliberately.

### Is there a risk of an archive becoming unmanageably large?

Volume alone is rarely the problem once contents are searchable, since the cost of an additional item is storage rather than organisational burden. The genuine risk is different: keeping everything while failing to record why anything mattered. A short written explanation attached at the moment of filing, stating what an item is and why it was kept, costs seconds and cannot be reconstructed later. Extraction handles the finding; the reasoning still has to be supplied by a person. Testing it against a handful of one's own documents in each format received is the fastest way to establish what applies, and it takes a few minutes rather than an afternoon.

### What would you tell somebody deciding whether this matters for them?

Ask how much of their material arrives from other people, in formats they did not choose, at a volume they cannot read. The higher that proportion, the more transformative extraction is. Somebody whose archive consists mainly of their own writing, deliberately titled, gains modestly. Somebody receiving filings, invoices, reports, correspondence, bundles, and photographs from a dozen uncoordinated sources gains something closer to a different profession, since the material stops being storage and becomes knowledge they can actually reach. The distinction matters most for anybody whose archive is expected to answer questions years after the material arrived, which describes a great deal of professional work.


### What is the single sentence to take from all of this?

That an attachment which cannot be searched is knowledge somebody has stored rather than captured. Everything else follows: the filing habits it makes unnecessary, the material it makes worth keeping, the correlations it makes possible without a hypothesis, and the shift of judgment from the moment something arrives to the moment somebody actually knows what they are looking for. The documents were always there. What changes is whether the knowledge inside them is part of the system or merely adjacent to it. Practitioners in fields with nothing else in common describe the same realisation in almost identical terms, usually within days of the first search that returns something from inside a document nobody has read. It is one of the few capabilities where a single demonstration is more persuasive than any explanation.

