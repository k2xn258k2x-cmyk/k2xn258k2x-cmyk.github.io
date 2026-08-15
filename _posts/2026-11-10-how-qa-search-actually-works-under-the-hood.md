---
title: "How QA Search Actually Works Under the Hood"
description: "A cybersecurity consultant and a PhD student reverse-engineer the search system they both depend on."
date: 2026-11-10 17:00:00 -0600
cover: /assets/img/feature-screenshot-placeholder.svg
---


Search is what determines whether a knowledge base is usable or merely large, and the distinction matters more than any other single property of such a system. A collection that cannot be searched effectively is an archive in the pejorative sense: material that exists, that somebody spent years accumulating, and that answers no question anybody actually has. A collection that can be searched effectively is an extension of memory. The difference between those two conditions is not the quality of the material and frequently not even its organisation. It is whether the retrieval mechanism can be relied upon to surface the right thing at the moment somebody needs it.

Every knowledge tool claims powerful search, which makes the claim useless as a differentiator. What varies enormously between systems, and what almost nobody examines, is the specific behaviour underneath: how different kinds of content are weighted against each other, how a multi-word query is decomposed, what happens when a term appears in several places within one item, whether attachments participate, and how results are ordered when many things match. Those decisions are not arbitrary and they are not cosmetic. They determine which of two entries appears first, which is frequently the difference between finding something in four seconds and concluding it does not exist.

![How QA Search Actually Works Under the Hood](/assets/img/feature-screenshot-placeholder.svg)

The professional who understands their search system behaves differently from one who does not, and the difference compounds. Somebody who knows that a match in a title outranks a match in a body will title things deliberately rather than descriptively. Somebody who knows that labels are weighted heavily will treat labelling as an investment in retrieval rather than as tidiness. Somebody who knows that the contents of attached documents participate will stop worrying about filenames. None of these adjustments requires effort; they require information, and the information is rarely presented anywhere because it is assumed to be uninteresting.
<!--more-->


Treating search as a black box has a specific cost that is difficult to notice from inside. When a query fails, the person concludes either that the material does not exist or that the search is poor, and both conclusions terminate the enquiry. Neither prompts the question that would actually help, which is what the system was doing with the query and why the thing that should have matched did not. Over years this produces a quiet erosion of confidence in one's own archive, and the erosion is usually attributed to the tool rather than to a mismatch between how the user writes and how the system reads.

There is also an architectural dimension that matters to anybody who thinks carefully about where their material lives. A search system that ranks by relevance has to compute that ranking somewhere, and a system that improves with use has to store the signal that improves it somewhere. Those two facts, in most products, imply a server, a profile, and a body of behavioural data held by somebody else. It is worth understanding whether that is what is happening, and the answer is knowable rather than a matter of faith, because the behaviour of a local system can be observed directly.

What follows is a conversation between two people who use the same search heavily, understand it differently, and decided to establish what it actually does rather than continuing to reason from impressions. One of them assesses systems for a living and does not accept undocumented behaviour in anything she depends on. The other has eleven hundred papers and a thesis to write, and wants her queries to work better tomorrow than they did today. They spent an evening running experiments, which is a considerably better way to learn a system than reading about one.


## Two mental models, neither of them confirmed

‘I want to establish the terms before we start,’ Suki said, ‘because we are going to disagree and I would like to know in advance about what.’

‘Establish away,’ said Priya.

‘I do not accept undocumented behaviour in anything I depend on professionally. That is not a preference, it is the whole of my method.’ Suki was already sharing a window containing an empty vault. ‘So I want to know what this does, precisely, and I want to know it by observation rather than by description.’

‘My interest is narrower and more selfish,’ Priya said. ‘I want my queries to work better. I have eleven hundred papers and a thesis, and roughly once a fortnight something fails to surface that I know is in there, and I want to understand why so I can stop it happening.’

‘Those are the same project.’

‘They are the same project approached from opposite ends, which is why I suggested it.’ Priya pulled up her own screen. ‘I will say my current mental model out loud so we can find out how wrong it is. I believe titles matter most, I believe labels matter, and I believe everything else is roughly equivalent.’

‘Mine is that titles matter most and I have no confident opinion about anything below that,’ Suki said. ‘Which is an unusual position for me and is why I am here.’

‘Then let us find out.’

‘Test vault first,’ Suki said. ‘I have created an empty one specifically for this. I am not running experiments in a production archive and neither should you.’

‘I was going to run them in mine.’

‘You were going to run them in a vault containing four years of doctoral work, and I am going to talk you out of that in about eleven seconds.’ Suki was dry about it. ‘Every experiment we run tonight involves creating entries containing a nonsense term in various positions. In a clean vault the results are unambiguous. In yours, every result is contaminated by four years of material that might also match.’

‘That is correct and slightly annoying.’

‘It is going to be that kind of evening.’


## Establishing the weights by experiment

They agreed on a nonsense term, which Suki insisted on generating rather than inventing.

‘If we choose it, it will be a word,’ she said, ‘and if it is a word it may appear somewhere by accident, and then we spend an hour explaining an anomaly that is our own fault.’

The generated string went into eight test entries, each placing it in a different position: in a title, as a label, in the body text, in a section, in an attachment name, inside an attached document, in a section attachment, and in the text extracted from an image.

‘Now search it,’ Priya said.

Suki did, and read the ordering aloud as it came back.

‘Title first. Label second. The one with the image third. Body fourth. Section fifth. Main attachment sixth. Section attachment last.’

There was a pause.

‘That is a clean result,’ Priya said. ‘I expected noise.’

‘It is a clean result because the vault is clean, which is the point I was making.’ Suki was already writing. ‘And the ordering is not merely a sequence. It implies specific weights, which I would like to establish, because a sequence tells me which is bigger and weights tell me by how much.’

‘How would you establish that?’

‘By making things compete.’ She created a new entry. ‘One entry with the term twice in the body and nothing else. One entry with the term once in the title. If the title outranks two body occurrences, the title weight is more than twice the body weight.’

They ran it. The title entry won.

‘Three body occurrences.’

Title still won.

‘Keep going,’ Priya said, with visible interest.

They kept going, and the crossover point told them what they wanted, and Suki reduced the whole exercise to a table she read out.

‘Titles at eight. Labels at six. Text recovered from images inside an entry at five. The body at four. Section text at three. Main attachments and their names at two. Attachments hanging off a section at one.’

Priya sat back.

‘That explains something that has been bothering me for a year.’

‘Say it.’

‘My paper entries always surface before my experiment logs, even when the experiment log is more relevant.’ She was working it out aloud. ‘And I could not understand why, because I assumed the search was reading everything equally. My paper entries have the author and the topic in the title, because that is how I name them. My experiment logs are named by date and protocol number, and the substance is entirely in the body and sections.’

‘So the paper entries are titled with the terms you search for and the logs are not.’

‘The logs are titled with the terms I never search for.’ She laughed, without much humour. ‘Which is a naming decision I made in my first month for reasons of tidiness and which has been quietly costing me for four years.’

Suki was more interested in a different implication.

‘I want to check something about encrypted entries,’ she said.

‘What are you expecting?’

‘I am expecting them not to participate, and I want to confirm it rather than assume it.’ She created an encrypted entry containing the term, locked it, and ran the query.

Nothing.

‘Good,’ she said, with evident satisfaction.

‘Explain why that pleases you, because it would frustrate me.’

‘Because the alternative would be alarming.’ Suki was definite. ‘If an encrypted entry were searchable while locked, that would mean its content was available somewhere in a readable form for indexing, which would make the encryption decorative. It not appearing is the correct behaviour and it is evidence that the encryption is doing what it claims.’

‘So the absence is the reassurance.’

‘The absence is the reassurance, and it is exactly the kind of thing I check when I assess a product.’ She unlocked the entry and ran the query again, and it appeared. ‘And once it is open in the session, it participates normally. Which is also correct.’

Priya asked about the results display, which had been nagging at her.

‘Six per page,’ Suki said. ‘Which I would not have chosen and which I have come to think is right.’

‘Why would you not have chosen it?’

‘Because my instinct is completeness and my instinct is wrong here.’ She scrolled. ‘Twenty results on a page is twenty things to evaluate, and the evaluation is the expensive part. Six is a set you can actually read, and if the answer is not in the first six the honest conclusion is usually that the query was wrong rather than that the answer is on page four.’

‘I go to page two constantly.’

‘You go to page two constantly and I would like you to notice, over the next fortnight, how often page two contains what you wanted.’ Suki said it without judgement. ‘My prediction is that it does perhaps one time in six, and that the other five times you should have refined the query.’

They also confirmed that the search respected the active page and label filters, which Priya had assumed and Suki had not.

‘It searches within scope,’ Suki said, having tested it. ‘Which means a filtered view produces a filtered search, and a term that exists elsewhere in the vault will not appear if you are narrowed to a branch that does not contain it.’

‘That has caught me,’ Priya admitted.

‘It catches everybody once, and the remedy is to notice what your filters are before concluding something is missing.’


## Writing entries for a system you now understand

‘Right,’ Priya said. ‘I want to convert this into practice, because knowing the weights is only interesting if it changes what I do.’

‘Start with titles, since they carry twice what the body does.’

‘I have been titling descriptively and I am going to stop.’ She pulled up an example. ‘This is a paper entry. The title is the author and a shortened version of the paper's own title, which is how a reference manager would name it and which is why I did it.’

‘And the terms you actually search for?’

‘Are not in it.’ She read it out. ‘I search for the technique, the delivery mechanism, the model organism. None of those words appear. The paper's own title uses different vocabulary because papers are titled to sound significant rather than to be found.’

‘So what would you write instead?’

‘Author, then the technique, then what it actually establishes.’ She was thinking as she typed. ‘Which is longer and less elegant and which puts three of my highest-value search terms into the eight-weight field.’

‘Elegance is not a retrieval property,’ Suki said.

‘Elegance is not a retrieval property and I am going to have that engraved on something.’

Suki described her own practice, which she had arrived at without knowing the weights and which turned out to be aligned with them.

‘I treat the title as a metadata summary,’ she said. ‘Client, engagement, phase, and the specific thing the entry concerns. Four components, always in that order, and it reads like a filing code because that is effectively what it is.’

‘And the detail?’

‘The detail is in the body and in sections, where it belongs, and where I do not need it to be found by search because I will have arrived via the title.’ She paused. ‘Which is a division I made for structural reasons and which the weighting happens to reward.’

Labels came next, and this was where Priya changed her mind mid-sentence.

‘My labels have been categories,’ she said. ‘Broad ones. Technique, organism, journal. Which is correct as a taxonomy and which I am now realising is wasteful, because a label at six is my second most valuable field and I have been filling it with terms that are true of two hundred entries each.’

‘Say what the alternative is.’

‘More specific labels on the entries where specificity matters.’ She was working it out. ‘Not for everything. But the thirty papers that genuinely define my subfield should carry labels naming the specific mechanisms they concern, because those are the terms I search when I am writing and those searches currently return everything in the broad category.’

‘That is a precision argument rather than a weighting argument.’

‘It is both, and the weighting is what makes it worth the effort.’ She nodded. ‘A specific label at six will beat the same term appearing in a body at four, which means a well-labelled entry outranks an entry that merely mentions the thing. That is exactly the discrimination I want and I have not been buying it.’

They arrived at a formulation between them, which Suki insisted on stating in one line because she distrusted anything requiring a paragraph.

‘Title for discovery. Labels for classification. Body for detail. Sections for depth.’

‘That is four clauses and it is the whole architecture,’ Priya said.

‘It is four clauses and it maps directly onto the weights, which is the only reason I trust it.’ Suki was pleased. ‘Anything that sounds like advice and does not map onto a mechanism is somebody's preference dressed up.’


## Reaching inside the documents

‘Now the part I have never properly tested,’ Priya said, ‘which is what happens with attachments, because I have four hundred PDFs and a great deal of assumption.’

She attached a paper to a test entry, a genuine one, and searched for a phrase she knew appeared in its methods section and nowhere in her own writing about it.

It came back.

‘That is deep indexing,’ Suki said. ‘The text layer of the document is extracted and becomes searchable content belonging to that entry.’

‘I knew that in the abstract and I have never watched it happen.’ Priya was scrolling through the result. ‘Which means my four hundred papers are not four hundred filenames. They are four hundred full texts.’

‘Test the boundaries,’ Suki said. ‘Do not take one success as a general property.’

They worked through the formats methodically, which was Suki's temperament and which Priya admitted afterward was the right approach.

Spreadsheets: a term placed in a cell of an attached workbook, found. Presentations: a term on a slide, found. An archive containing a text file, with the term inside the text file inside the archive, found. A stored email message with the term in its body, found, and also when the term was inside a document attached to that message.

‘That last one is the one that would matter most to me,’ Suki said. ‘Because a substantial share of what arrives in my professional life is a message with something attached to it, and the substance is in the attachment.’

Priya tested plain text and code files, which were found as expected.

‘So the general property is that if the content can be read as text, it participates.’

‘The general property appears to be that,’ Suki said, ‘and I would state it as an observation rather than as a rule, because I have tested eight formats and not every format.’

‘That is a distinction nobody but you would make.’

‘It is the distinction between having tested something and having concluded something, and conflating those is how people end up confidently wrong.’

They moved to the weighting question, which was more subtle and which took them longer.

‘Attachment names and their content sit at two when the attachment belongs to the entry,’ Suki said, ‘and at one when it belongs to a section.’

‘Why would those differ?’

‘Because of what the placement asserts.’ Suki thought about it. ‘An attachment on the entry is about the entry as a whole. An attachment on a section is about one part of it. The second is more specific and therefore, for retrieval purposes, less representative of what the entry is.’

‘That is an argument I would not have constructed and which I think is right,’ Priya said.

‘It also produces a practical consequence, which is that where you attach something affects how findable the entry is through it.’ Suki was definite. ‘Which is not a reason to attach everything at the entry level. Structure should follow meaning. But it is worth knowing that the choice has a retrieval effect as well as an organisational one.’

Priya raised the thing she had noticed for months and never investigated.

‘The first search after I open it is slower,’ she said. ‘Not much. A fraction of a second. And every search after that is instant.’

‘That is the warm-up,’ Suki said. ‘Extracted attachment text is brought into working memory as it is needed rather than all at once, and the top results trigger loading for the material behind them so the ranking can be refined.’

‘How many?’

‘The top dozen or so, which is more than a page of results and therefore more than most people will look at.’ She shrugged. ‘It is a sensible arrangement. Loading everything at once on a large archive would be wasteful, and loading nothing would make attachment matches slow every time.’

‘So the tiny delay is the system fetching the evidence for its own ranking.’

‘The tiny delay is the system fetching what it needs to be correct rather than merely fast,’ Suki said, ‘which is a trade I would make every time and which most people never notice they are being offered.’


## Training a ranking with a thumb

‘My turn to show you something,’ Priya said, ‘and I want to warn you that I ignored it for a year and I am now slightly evangelical.’

‘I distrust converts.’

‘You should. Watch anyway.’

She ran a query in her own vault, a real one, and six results came back.

‘Third one is the one I want,’ she said. ‘First two are papers that mention the term in passing. Third is the one that is actually about it.’

She voted the third up and the first down, and Suki watched the interface acknowledge both.

‘Run it again,’ Suki said.

Priya ran it again. The order had changed.

‘Say what you think just happened, mechanically.’

‘A very large weight was applied,’ Priya said. ‘Large enough to dominate everything else, because that result did not move by one position, it moved to the top and stayed there.’

‘Which implies the vote is not a nudge.’

‘It is not a nudge at all. It is effectively an override.’ She demonstrated by searching for something else where the same entry was genuinely irrelevant, and it did not appear. ‘But only for the query it was voted on. It has not become globally important.’

Suki asked the question she had evidently been holding.

‘Where does the vote live?’

‘In the vault,’ Priya said. ‘In my own state, with everything else. Which I checked, because I assumed you would ask.’

‘I would have asked and I am pleased you anticipated it.’ Suki nodded. ‘That matters more than the ranking behaviour. A system that improves with use has to store the signal that improves it, and in most products that implies a profile held by somebody else. Here the training data is a field in my own file.’

‘Which means it travels with the folder.’

‘Which means it travels with the folder, survives a backup, and is not available to anybody at all.’ She was clearly working through the implications. ‘It also means the improvement is genuinely personal rather than aggregated. Your votes shape your search and nobody else's, which is the correct behaviour for a private archive and is not how most ranking systems work.’

Priya described the year she had wasted, which she said she was including deliberately.

‘I did not vote at all for a year,’ she said. ‘Not once. I looked at the suggestions, formed a private opinion, and moved on.’

‘Why?’

‘Because I had classified them as output.’ She paused. ‘You do not argue with output. You evaluate it. And because I was evaluating rather than participating, the ranking stayed generic, which confirmed my evaluation, which is a very tidy trap.’

‘How long before it changed?’

‘Noticeably better within six weeks. Genuinely good within three months.’ She was definite. ‘And the effect is concentrated on the queries I run repeatedly, which is exactly where I want it, because those are the ones that cost me time.’

Suki asked about downvotes, which she suspected mattered more than Priya had said.

‘They matter more,’ Priya agreed. ‘An upvote says this is right, which the system could partly infer from your behaviour anyway. A downvote says this looks relevant and is not, which is information the system has no other route to.’

‘Boundary information.’

‘Boundary information, and it is the thing I would tell anybody starting. Vote on the wrong ones. The wrong ones are where the ranking is confused, and telling it about the confusion is worth more than confirming what it already got right.’

She showed the second control alongside it.

‘When a search does not find what I wanted, there is an option to turn the query into a new entry, and it prefills the body with what I typed.’

‘Why is that useful?’

‘Because a failed search is a gap.’ Priya said it as something she had clearly thought about. ‘If I searched for something and it is not there, then either it should be there or the question is one I have not answered yet. Both of those are reasons to create an entry, and the query text is a perfectly good first line of it.’

‘It is a question you already phrased.’

‘It is a question I already phrased, at the moment I actually had it, which is the best possible prompt.’ She demonstrated: a confirmation appeared before anything was created, with a short note about what would happen. ‘And it asks before doing it, which I appreciate more than I expected.’

‘Why?’

‘Because I hit that control by accident twice in my first week and both times nothing irreversible happened.’ She grinned. ‘And when something is created there is a brief notice offering to undo it, which caught a third accident.’

‘That is good design and it is the kind that is invisible when it works,’ Suki said. ‘Nobody praises a confirmation dialog. They only notice its absence, once, expensively.’


## The suggestions that arrive without a query

‘There is a second thing trained by the same votes,’ Priya said, ‘and it is the one I would least willingly give up.’

She opened a paper entry, and alongside it a panel populated with other entries, fading in as they resolved.

‘Related entries. It proposes things that are contextually similar to what I am looking at, and I vote on those the same way.’

Suki leaned toward her camera.

‘This is a different problem from search.’

‘Say why, because I want your version.’

‘Search requires a query, which requires me to know what I am looking for.’ Suki was precise. ‘This requires nothing. It answers a question I did not ask, which means it can answer questions I would not have known to ask.’

‘Which is exactly the difficulty in my field.’ Priya was nodding. ‘Finding a paper is trivial. Remembering that a paper I read fourteen months ago bears on a problem I am looking at today is not, and no amount of searching helps because I have to already suspect the connection.’

‘And this proposes the connection.’

‘It proposes the connection, and about one time in six the proposal is the section I then write.’ She scrolled the panel; more suggestions appeared, paginated. ‘And it gets better in proportion to how much I have told it, which is the same mechanism as the search voting and the same store.’

Suki was quiet for a moment, which Priya had learned meant something structural was being considered.

‘I want to describe what this is,’ Suki said, ‘because I think it is more interesting than it appears and I want to check my description against yours.’

‘Go.’

‘There is a signal, which is your votes. There is a model of some kind, which is whatever distribution those votes have produced. And there is inference, which is what happens when a suggestion is proposed.’ She counted it off. ‘Those are the three components of a learning system, and all three of them are sitting in a file on your machine.’

‘Yes.’

‘Nothing about that has left your laptop.’ Suki said it with evident interest. ‘Which is not how any of this normally works. The usual arrangement involves behaviour being aggregated centrally, a model trained on many users, and inference performed remotely, and every one of those steps is a place where somebody else holds something about you.’

‘Whereas this is trained on a population of one.’

‘Trained on a population of one, which makes it worse in the general case and better in yours.’ Suki was working it out. ‘A model trained on thousands of researchers would know more about research in general and nothing at all about which four papers you personally consider foundational. For a private archive, the population of one is the correct population.’

‘I had not framed it as a trade,’ Priya said.

‘It is a trade and the trade is entirely in your favour for this use, which is unusual and worth noticing.’ She paused. ‘It also means the thing degrades gracefully. If you stop voting, it stops improving. It does not stop working, and nothing about it depends on anybody continuing to operate a service.’

They talked briefly about how the suggestions behave visually, which Priya raised and Suki thought was more important than it sounded.

‘They arrive rather than appearing,’ Priya said. ‘There is a short fade as each one resolves.’

‘Which does two things,’ Suki said. ‘It signals that the panel is working rather than empty, which prevents you concluding there is nothing to show. And it introduces a pause of a few hundred milliseconds before the content is readable, which stops the panel competing with whatever you were actually reading.’

‘That is a considerably more generous reading than I would have given it.’

‘It is a reading based on having assessed a great many interfaces that get it wrong,’ Suki said. ‘A suggestion panel that snaps into existence pulls attention away from the entry, and the entry is the thing you opened.’


## The two search surfaces and when each is right

‘Last section and it is the lightweight one,’ Priya said. ‘Because we have spent two hours on the heavy machinery and I do most of my retrieval with something much simpler.’

‘The toolbar.’

‘The toolbar. I type three or four characters and a dropdown appears with suggestions, and about seventy percent of the time what I want is in it and I never run a real search at all.’

Suki tested it on her own vault, watching the suggestions update as she typed.

‘It is reading across titles, bodies, labels, and the names and contents of attachments,’ she said, after a few attempts. ‘Which is the same material as the full search.’

‘Then what is the difference?’

‘Intent, mostly, and I would put it like this.’ Suki considered. ‘The toolbar answers where is the thing I am thinking of. The sidebar answers what do I have about this. The first assumes you know what exists and want to reach it. The second assumes you have a question and want to know what bears on it.’

‘That is exactly right and I have never articulated it,’ Priya said. ‘Which explains why my usage splits the way it does. Reaching a specific paper is the toolbar. Writing a section of a chapter is the sidebar, because at that point I do not know what I have.’

‘And the results behave differently in a way that matches.’

‘The toolbar gives me a list to pick from. The sidebar gives me ranked results with the ability to vote, which only makes sense if I am evaluating a set rather than locating one item.’

The query history came up last, and it produced the observation that Priya said afterward was the most useful thing in the whole call.

‘Past queries appear as suggestions when I start typing,’ she said. ‘Which is convenient, and which I have started using diagnostically.’

‘Explain the diagnostic.’

‘A query I have run eleven times is a structure I have not built.’ She said it as a rule. ‘If I keep asking the same question, the answer should be an entry, or a label, or a page. The repetition is telling me something.’

Suki stopped.

‘Say that again.’

‘A query I have run eleven times is a structure I have not built.’

‘That is the best thing said on this call,’ Suki said, ‘and I have been doing the technical work, so I am aware of what I am conceding.’

‘What would you do with it?’

‘Review my own suggested queries once a quarter and treat anything recurring as a design signal.’ She was already writing it down. ‘Which costs four minutes and which will identify the gaps in my structure more reliably than any amount of thinking about my structure.’


## Diagnosing a query that failed

‘I want to bring you a real failure,’ Priya said, ‘because everything we have done so far is synthetic and the thing that actually happens to me is that a query returns nothing and I have no idea why.’

‘Bring it.’

‘Six weeks ago I searched for a mechanism by name and got four results, none of which was the paper I was thinking of, and I know the paper exists because I found it eventually by going through a chapter's label.’ She had it open. ‘I have kept the query.’

‘Run it.’

She ran it. Four results, none of them the one.

‘Now open the one you wanted and tell me where the term appears in it,’ Suki said.

Priya opened it, and then went quiet.

‘It does not appear,’ she said.

‘Anywhere?’

‘Anywhere. Not in the title, not in the labels, not in the body, not in my commentary.’ She scrolled. ‘It appears in the attached paper, which means it should have been found at weight two, and it was not.’

‘Then that is the interesting case and we should establish why rather than concluding anything.’ Suki leaned in. ‘Check the attachment. Is it the paper itself?’

‘It is a scan.’

There was a pause.

‘Is it a scan of a printed page or a document with a text layer?’

‘It is a photograph of a printed page,’ Priya said slowly. ‘Which I took with a phone at a conference because the paper was not available and somebody had a physical copy.’

‘Then the question becomes whether the term is legible in it, because that is a different extraction path from a document with text in it.’

They looked. The photograph was taken at an angle, in poor light, and the term in question sat in a paragraph running into the gutter of the binding.

‘That is not going to read well,’ Suki said.

‘So it is not a search failure at all.’

‘It is not a search failure. It is a source quality issue several steps upstream, and the search behaved exactly as it should have given what it had to work with.’ Suki was matter of fact. ‘Which is the general shape of most apparent failures. The system did what it was told with what it was given.’

‘What would you do about it?’

‘Two things and only one is technical.’ Suki counted. ‘Technically, nothing. That image is what it is. Practically, put the term in the title, because you have now demonstrated that you search for it and cannot reach it, and a title is the highest-weight field you control directly.’

‘So the remedy for a bad source is good metadata.’

‘The remedy for a source you cannot improve is metadata you can, and that is a rule worth generalising.’ She paused. ‘Anything arriving in a form you did not choose, from a device you did not control, should carry the terms you will search for in a field you did write.’

Priya was writing.

‘I have about sixty of those photographs,’ she said. ‘From conferences, from a library that would not let me photocopy, from a colleague's desk.’

‘Then sixty titles.’

‘Sixty titles, which is an afternoon, and which is a considerably better use of an afternoon than what I did six weeks ago, which was spend forty minutes finding one paper and then not investigate why.’

‘That is the actual lesson and it is not about search,’ Suki said. ‘When a query fails, find out why. Almost nobody does, because a failed query feels like an absence rather than an event, and absences do not prompt investigation.’


## The things each of them checked alone

‘Before we finish I want to compare what we each verified independently,’ Suki said, ‘because I suspect our lists do not overlap at all.’

‘Mine is short and it is about scale,’ Priya said. ‘Go first.’

‘Mine is about traffic and it took an hour.’ Suki was already pulling something up. ‘I ran the network panel open, in a fresh session, and then searched continuously for about forty minutes across a large vault. Queries, votes, opening results, browsing suggestions, everything I could think of.’

‘And?’

‘Zero requests.’ She said it flatly. ‘Which I expected, and expecting a result is not the same as confirming it, and the distinction is the whole of my profession.’

‘Why does it matter for search specifically?’

‘Because search is the feature most likely to leak in any system.’ Suki was definite. ‘A query is a statement about what somebody wants to know. It is frequently more revealing than the material itself, because the material is what you have and the query is what you are thinking about right now. Products that transmit nothing else often transmit queries, for ranking, for suggestions, for analytics, and it is treated as unremarkable.’

‘And the ranking here is computed locally.’

‘The ranking is computed locally, the votes are stored locally, and the suggestions are produced locally, and I confirmed all three by observing that nothing left the machine while all three were happening.’ She shrugged. ‘Which took an hour and which I will not have to do again unless something changes.’

‘Mine is much less rigorous,’ Priya said.

‘Say it anyway.’

‘I wanted to know whether it holds up at my size, because eleven hundred papers with attachments is not a small vault and I have watched other things become unusable at a few hundred.’ She pulled up her own. ‘So I timed it. Not carefully. With a phone.’

‘What did you find?’

‘First query of a session, roughly a second, which is the warm-up we established earlier. Everything after that, effectively immediate, and I could not distinguish it from instant.’ She scrolled through a result set to demonstrate. ‘And it does not degrade as I go. The fortieth query of an afternoon behaves the same as the second.’

‘Did you test it with the attachments cold?’

‘I closed everything, reopened, and searched for something that only exists inside a large document.’ Priya nodded. ‘About a second and a half. Which is the extraction being pulled in, and after that the same query is instant.’

‘That is consistent with what we observed on the small vault.’

‘Which is what I wanted to know, and it is why I stopped worrying about growth.’ She sat back. ‘Because my archive is going to be twice this size by the time I finish, and the thing I could not afford is a system that works now and does not at two thousand.’

Suki considered.

‘Those are genuinely different concerns and I think both are necessary,’ she said. ‘Mine tells me whether I can trust it. Yours tells me whether I can rely on it. A system can be entirely trustworthy and unusable, and it can be fast and quietly reporting everything you type.’

‘And you would want both answered before committing an archive.’

‘I would want both answered before committing anything I would mind losing,’ Suki said, ‘and I would want them answered by observation, which between us took about two hours.’


## What they agreed to change

‘I want to close by stating what I am actually doing differently,’ Suki said, ‘because we have spent an evening establishing facts and facts on their own are inert.’

‘Go.’

‘Two things and one of them is retrospective.’ She counted them. ‘Prospectively, my titles are already close to correct and I am going to make my labels considerably more specific, because I have been treating labels as a filing category and they are the second most valuable field I have.’

‘And retrospectively?’

‘I am going to retitle about forty entries.’ She said it as somebody who does not enjoy admitting to rework. ‘Not four hundred. Forty. The ones I search for repeatedly, which I can identify from my own query history, which is a use for that feature I would not have found without this conversation.’

‘That is a very small amount of work for a large return.’

‘It is about ninety minutes and it improves the retrieval of the material I actually reach for, which is a considerably better use of ninety minutes than most things I could do to this archive.’ She turned it back. ‘Yours?’

‘Mine is larger and I have been avoiding it for four years,’ Priya said. ‘My experiment logs are titled by date and protocol number and they should not be.’

‘How many?’

‘Around three hundred.’

‘Do not do three hundred.’

‘I was not going to do three hundred.’ Priya laughed. ‘I am going to do the failures. About a hundred and forty of them, which are the ones I actually go back to, because a successful experiment produces a figure that ends up in a paper and a failed one produces knowledge that exists nowhere else.’

‘That is the correct subset and it is the one I would have chosen.’

‘And I am going to add the variable that was under investigation to each title, which is the term I search and which is currently nowhere in the eight-weight field.’ She was clearly relieved to have decided it. ‘Twenty a week for seven weeks, which is manageable and which I will actually do because I have a reason rather than an intention.’

‘Anything else?’

‘Vote on the wrong ones.’ Priya said it as a resolution. ‘I have been upvoting good results and mostly ignoring bad ones, and you have convinced me that the downvotes carry more information.’

‘I did not convince you. You said it yourself about forty minutes ago.’

‘I said it and I had not internalised it, which is a different state,’ Priya said. ‘That is why one has these conversations.’


## Search as an interface rather than a feature

Search appears in every product description and is almost never described in a way that lets somebody use it better. What that conversation demonstrates is that the specific behaviour is knowable by observation, that knowing it changes how a professional writes and organises material, and that the change requires no additional effort once the information is available.

The weighting is the core of it, and the specific numbers matter because they establish relationships rather than a mere ordering. Titles carry eight, labels six, text recovered from images inside an entry five, the body four, section text three, main attachments and their names two, and attachments belonging to a section one. A match in a title therefore outranks two matches in a body, which is not a subtlety: it means an entry named with the terms somebody actually searches will consistently surface ahead of an entry that merely discusses them. Both practitioners in that conversation discovered that their own naming conventions had been working against them for years, one having titled research logs by date and protocol number and the other having filled a six-weight field with categories true of hundreds of items.

The practical formulation that emerged from this is short enough to hold: title for discovery, labels for classification, body for detail, sections for depth. It is worth stating that this is not a preference about tidiness. It maps directly onto the mechanism, which is the only reason to trust it over any other advice about how to structure notes.

The reach into attachments is what removes the requirement to predict, at the moment of filing, how something will be wanted later. Text is extracted from documents, spreadsheets, presentations, archives, and stored email messages including what is attached inside them, so a phrase existing only inside a file becomes reachable without anybody having retyped it. That capability is what makes a large document collection into a searchable body rather than a set of filenames, and it also explains the brief pause on a first query, which is the system loading the material it needs to rank correctly rather than merely quickly.

The learning behaviour deserves particular attention because of where it happens. Votes applied to results produce a very large adjustment, effectively an override for that query rather than a nudge, and they persist. The same signal trains the contextual suggestions that appear alongside an entry without any query at all, which addresses a problem search structurally cannot: remembering that something read fourteen months ago bears on a problem today. What makes this notable is not the mechanism but its location. The signal, the accumulated distribution, and the inference all sit in the user's own vault. Nothing is aggregated, nothing is transmitted, and the resulting model is trained on a population of one, which is the wrong population for general knowledge and precisely the right one for a private archive.

The lighter surfaces then divide the work sensibly. A toolbar with live suggestions answers where is the thing I am thinking of, and handles the majority of everyday retrieval before a full search is ever run. The sidebar answers what do I have about this, which is a different question requiring ranked results and the ability to evaluate a set. Past queries surfacing as suggestions is a convenience and, used deliberately, a diagnostic: a question asked repeatedly indicates a structure that has not been built, and reviewing one's own recurring queries identifies gaps more reliably than any amount of reflection about organisation.

None of which changes the algorithm. What changes is the material it is given, and that is the actual conclusion. A search system rewards a user who understands it, not by behaving differently, but by receiving better titles, more specific labels, and content placed where its weight will do the most good. The professional who treats retrieval as somebody else's problem gets whatever the defaults produce. The one who spends an evening establishing how it works gets an archive that answers, and the difference between those two positions is roughly ninety minutes of experiments and a willingness to retitle forty things.


## FAQs

### What are the actual weights used when ranking results?

Matches are scored according to where they occur, with titles carrying the highest weight at eight, labels at six, text recovered from images inside an entry at five, the body at four, section text at three, main attachments and their names at two, and attachments belonging to a section at one. These are relationships rather than an ordering, which matters: a single title match outranks two body matches, so an entry named with the terms somebody actually searches will consistently appear ahead of one that merely discusses them at length. Knowing the numbers rather than the ordering is what makes them actionable, since it converts a vague sense that titles matter into a specific reason to put particular words in them.

### How can somebody verify the weighting for themselves?

By experiment in an empty test vault rather than a working one. Generate a nonsense string, place it in a separate test entry for each field, and search for it. The result order reveals the ordering directly. To establish relative magnitude, make fields compete: an entry with the term once in the title against one with the term repeated in the body, increasing the repetitions until the ordering flips. Running these experiments in a production archive contaminates every result with existing material that may also match. The whole exercise takes under an hour and produces knowledge that changes how somebody writes every entry afterward, which is an unusually good return on an evening.

### Why does the weighting explain results that previously seemed wrong?

Because most people title entries descriptively rather than for retrieval, which puts their highest-value search terms nowhere near the highest-weight field. A researcher naming experiment logs by date and protocol number, or a professional naming records by a filing code, has filled the eight-weight field with terms nobody ever searches. The entries that surface first are then whichever ones happen to carry the query terms in their titles, which may be less relevant. Understanding this usually produces an immediate desire to retitle a small subset. Practitioners frequently discover that a naming convention adopted in the first month for reasons of tidiness has been quietly working against them for years.

### How should entry titles be written for better retrieval?

By including the terms actually used when searching, even at the cost of elegance. A paper entry titled with its author and the paper's own wording carries whatever vocabulary the authors chose for significance rather than for retrieval. Adding the technique, the mechanism, or what the item actually establishes places three high-value terms in the highest-weight field. Practitioners in professional settings often use titles as structured metadata summaries: client, engagement, phase, and subject, in a consistent order, which reads like a filing code and functions as one. The trade is a slight loss of elegance for a substantial gain in findability, and elegance is not a retrieval property.

### What is the right strategy for labels given their weight?

Specificity where it matters, since labels are the second most valuable field. Broad categories that apply to hundreds of entries are correct as a taxonomy and weak for retrieval, because a match on such a label discriminates between nothing. Adding specific labels to the smaller set of items that genuinely define a subject area means a query for that specific term returns those items ahead of everything that merely mentions it. This is a precision argument that the weighting makes worth the effort rather than a general recommendation to label more. Auditing an existing label set with this in mind usually identifies a handful worth splitting and several that are doing nothing at all.

### What is the short formulation for structuring entries?

Title for discovery, labels for classification, body for detail, sections for depth. Each clause maps onto a weight, which is the reason to trust it over other advice about note structure. The title is what makes an entry findable; the labels are what let it be distinguished within a category; the body carries the substance somebody reads once they have arrived; and the sections carry the parts that need to remain separate. Anything that sounds like advice and does not map onto a mechanism is somebody's preference presented as a principle. Applying it consistently across entries of the same type is what makes it compound, since the benefit comes from every entry behaving predictably rather than from any single one being well written.

### Are encrypted entries searchable?

Not while locked, and that is the correct behaviour rather than a limitation. If an encrypted entry appeared in results without being unlocked, its content would have to exist somewhere in readable form for indexing, which would make the protection decorative. The absence of such entries from results is therefore evidence that the encryption is doing what it claims. Once an entry is unlocked within a working session, it participates in search normally, which is what allows protected material to be used rather than merely stored. Confirming this personally, by locking a test entry and searching for a term inside it, takes two minutes and settles a question that would otherwise remain an assumption.

### Does search respect active page and label filters?

Yes, which means a filtered view produces a filtered search. A term existing elsewhere in the vault will not appear if the current scope excludes the branch containing it. This catches most people once, and the remedy is to check what filters are active before concluding that something is missing. It is also useful deliberately: narrowing to a client, a project, or a category before searching produces results confined to that context, which is frequently exactly what a specific conversation requires. Noticing the active scope before concluding something is missing becomes automatic quickly, and until it does it accounts for a surprising share of apparent failures.

### Why are results paginated at six per page?

Because evaluation is the expensive part of searching, not display. Twenty results is twenty things to assess, and the assessment cost rises faster than the value of the additional items. Six is a set that can genuinely be read. Practitioners who habitually go to the second page are encouraged to notice how often it actually contains what they wanted, since the honest answer is usually that the query needed refining rather than that the answer was further down. Refining a query is faster than scanning pages. Users who track this for a fortnight generally find that refining the query is both faster and more reliable than paging, which changes the habit permanently.

### Which attachment formats have their contents searched?

Text is extracted from documents including PDFs via their text layer, from spreadsheets by pulling cell contents, from presentations by reading slide text, from archives by opening them and indexing readable contents, and from stored email messages including subject, body, and anything attached inside them. Plain text and source files are read directly. The practical generalisation is that content readable as text participates, which covers most of what arrives in professional correspondence regardless of the form the sender chose. Testing a few formats personally is worthwhile, since knowing by observation which of your own material participates is more useful than a general assurance. Anything readable as text tends to participate, and the practical implication is that the format material arrives in stops determining whether it can be found later.

### Why do attachments on sections rank lower than attachments on the entry?

Because placement asserts something about scope. An attachment on the entry concerns the entry as a whole, while an attachment on a section concerns one part of it, and the second is therefore less representative of what the entry is about. The practical consequence is that where something is attached affects how findable the entry becomes through it. This is not a reason to attach everything at the top level, since structure should follow meaning, but it is worth knowing that the choice carries a retrieval effect. In practice this rarely changes where something should be attached, and it does explain why an entry sometimes ranks lower than expected on a term buried in a section attachment.

### What is background warm-up and why is the first search slightly slower?

Extracted attachment text is loaded into working memory as it is needed rather than all at once, and the top results trigger loading of the material behind them so the ranking can be refined. This produces a brief pause on the first query of a session and immediate results afterward. Loading everything at once would be wasteful on a large archive, and loading nothing would make attachment matches slow every time. The small delay is the system fetching what it needs to be correct rather than merely fast. Most users notice the pause once and then stop noticing it, which is the correct outcome for a mechanism operating underneath the work.

### How do votes on search results work?

Voting a result up or down applies a very large adjustment to its ranking for that query, large enough to function as an override rather than a nudge: a voted result moves to the top and stays there. The effect is specific to the query rather than global, so an entry promoted for one search does not become universally prominent. Votes persist and accumulate, which means repeated queries become progressively more accurate for the individual doing the voting. Because the effect is query-specific rather than global, voting aggressively carries no risk of distorting unrelated searches, which makes experimentation safe. Because the adjustment is applied at ranking time rather than altering the entry, nothing about the underlying material is modified by voting on it.

### Where are votes stored?

In the user's own vault, alongside everything else, which is the property that matters most about the mechanism. A system that improves with use must store the signal producing that improvement somewhere, and in most products that implies a profile held externally. Here the training data is a field in a local file, so it travels with the folder, survives a backup, and is available to nobody. It also means the improvement is genuinely personal rather than aggregated across many users. Confirming this personally is straightforward and worth doing, since a system that improves with use is exactly the kind that usually implies a profile held elsewhere.

### Why do downvotes matter more than upvotes?

Because they carry information the system has no other route to. An upvote confirms that something relevant was ranked highly, which is partly inferable from ordinary behaviour. A downvote states that something which appeared relevant is not, which describes a boundary rather than a centre. Practitioners who have trained a ranking over months consistently advise voting on the wrong results first, since the wrong results are where the ranking is confused and correcting confusion is worth more than confirming what was already right. The practical habit is to vote on the first wrong result in any set rather than only on the right one, which takes the same click and teaches considerably more.

### How long does it take before voting produces noticeable improvement?

Users report a noticeable difference within about six weeks and genuinely good results within three months, with the improvement concentrated on the queries run repeatedly. This is a cumulative rather than a static capability, so evaluating it during the first month produces an accurate assessment of the present and a wrong conclusion about the future. A common failure is treating suggestions as fixed output rather than as something to participate in, which guarantees the mediocre results that appear to justify not participating. Anybody evaluating the feature should therefore plan to reassess after a couple of months of participation rather than judging it during the first fortnight.

### What does the add-to-note option do?

It converts a query into a new entry, prefilling the body with the text that was typed. The logic is that a failed search identifies a gap: either the material should exist and does not, or the question is one that has not been answered yet, and both are reasons to create something. The query is also a question phrased at the moment somebody genuinely had it, which makes an excellent first line. A confirmation appears before anything is created, and a brief undo notice follows afterward. The confirmation and the undo notice together mean the control can be pressed by accident without consequence, which most users discover in their first week.

### What are related entries and how do they differ from search?

They are contextually similar entries proposed alongside whatever is currently open, without any query. The difference is fundamental: search requires knowing what to look for, while suggestions answer a question that was never asked and can therefore surface connections somebody would not have known to seek. This addresses the characteristic difficulty of large research collections, where finding a specific item is trivial and remembering that something read a year ago bears on today's problem is not. For research-heavy work this is frequently the more valuable of the two, since locating a known item was rarely the difficulty. The panel appears alongside whatever is open, so encountering suggestions requires no deliberate action and costs nothing when they are not useful.

### How do related entries improve over time?

Through the same voting signal used for search results, applied to the suggestions themselves. Upvoting good proposals and downvoting poor ones adjusts the relevance distribution, and the improvement is proportional to how much has been fed in. Because suggestions appear whenever an entry is open, voting costs a click and no thought, which makes it sustainable. Users describe roughly one suggestion in six eventually becoming the basis of something they write, which is a substantial return on a mechanism requiring no queries. Voting while an entry is already open is what makes the habit sustainable, since it requires no separate activity and no deliberate session.

### Is the learning behaviour a form of machine learning?

Structurally it has the three components: a signal, which is the votes; an accumulated distribution, which functions as a model; and inference, which is what happens when a suggestion is proposed. What distinguishes it is location. All three sit in a local file, so nothing is aggregated centrally and nothing is transmitted. The resulting model is trained on a population of one, which is the wrong population for general knowledge and precisely the right one for a private archive where the useful judgments are personal. It also degrades gracefully: if somebody stops voting it stops improving rather than stopping working, and nothing depends on any service continuing to operate.

### How does typeahead search differ from the sidebar search?

By the question being asked. The toolbar with live suggestions answers where is the thing I am thinking of, assuming the user knows what exists and wants to reach it, and it handles the majority of everyday retrieval before a full search is run. The sidebar answers what do I have about this, which assumes a question rather than a target and therefore requires ranked results and the ability to evaluate a set. The two surfaces suit locating and investigating respectively. Most users find their retrieval splits naturally between the two once the distinction is named, and are surprised by how much of it never becomes a formal search.

### What does typeahead read across?

The same material as the full search, including titles, bodies, labels, and the names and contents of attachments, presented as suggestions that update while typing. Users frequently find what they want after three or four characters, which is why a large share of retrieval never becomes a formal search. The convenience is real and the underlying reach is what makes it reliable: a suggestion can surface based on text inside an attached document rather than only on what somebody typed as a title. Because the underlying reach is the same, a suggestion can surface based on text inside an attached document rather than only on titles, which is what makes it dependable.

### How can query history be used as a diagnostic?

By treating repetition as a design signal. Past queries surface as suggestions while typing, which is convenient and also a record of what somebody keeps needing. A question asked eleven times indicates a structure that has not been built: a label that should exist, a page that should exist, or a summary entry that should hold the answer. Reviewing recurring queries once a quarter takes a few minutes and identifies gaps in organisation more reliably than deliberate reflection about organisation. Converting a frequently repeated query into a permanent piece of structure removes it from daily work entirely, which is a considerably better outcome than running it faster.

### What is the highest-return change for somebody who now understands the weighting?

Retitling a small, deliberately chosen subset rather than everything. The candidates are identifiable from query history: the entries reached for repeatedly. Forty entries is roughly ninety minutes and improves retrieval of the material that is actually used, which is a considerably better investment than a comprehensive pass. The second highest-return change is making labels more specific on the smaller set of items where specificity would discriminate, since labels carry the second highest weight and are usually filled with categories that distinguish nothing. Choosing the subset from query history rather than by intuition is what keeps the exercise small enough to finish. Doing both in one sitting, rather than resolving to work through the archive gradually, is what makes the improvement arrive immediately.

### Does any of this require changing how the tool works?

None of it. The algorithm is fixed; what changes is the material it receives. A search system rewards a user who understands it by ranking better titles and more specific labels higher, which is not a different behaviour but the same behaviour applied to better input. This is why understanding the mechanism is worth an evening: the improvement is entirely in the user's control, arrives immediately for anything retitled, and continues accumulating through the voting signal without any further deliberate effort. That the improvement is entirely in the user's control is also the reason it persists, since nothing about it depends on a future version behaving differently.

### What should somebody do when a query returns nothing useful?

Investigate rather than concluding. A failed query feels like an absence, and absences do not prompt enquiry, which is why almost nobody establishes what actually happened. The productive sequence is to locate the item by another route, open it, and check where the search term appears. Frequently it appears nowhere the user controls, or it appears only inside a source whose text could not be read cleanly. In both cases the system behaved correctly given its input, and the remedy lies upstream rather than in the query. Building the habit of investigating rather than moving on is what turns occasional frustration into a set of small corrections that stop the same failure recurring. The investigation usually takes two minutes and frequently reveals something general rather than specific.

### Why do photographed or scanned pages sometimes not match?

Because extraction quality depends entirely on legibility. A document with a text layer yields its content directly, while a photograph of a printed page relies on reading the image, and a picture taken at an angle in poor light with text running into a binding gutter will not produce reliable results. This is not a search behaviour so much as a source quality issue several steps upstream. The correct response is to accept the source as it is and compensate where the user has control. Where the material matters and cannot be replaced, the practical response is to compensate in the fields the user controls rather than to attempt to improve the image. A rephotographed page taken squarely in good light also helps considerably where that option exists.

### What is the remedy for material that cannot be improved?

Metadata the user writes themselves. Anything arriving in a form nobody chose, from a device nobody controlled, should carry the terms it will be searched for in a field that was authored deliberately, which in practice means the title and the labels. The general rule is that a source you cannot improve calls for metadata you can. Practitioners with collections of photographed material typically identify a manageable subset, often a few dozen items, and retitle them in a single afternoon. Identifying the affected subset first, rather than attempting a general pass, keeps the work small: most people find they have a few dozen such items rather than hundreds. An afternoon of retitling then covers everything that actually matters.

### Does the search system make any network requests?

Observation with the browser network panel open across an extended working session, including queries, voting, opening results, and browsing suggestions, shows no requests at all. This matters more for search than for almost any other feature, because a query is a statement about what somebody is thinking at that moment and is frequently more revealing than the material being searched. Products that transmit nothing else routinely transmit queries for ranking or analytics, and it is generally treated as unremarkable. Confirming this personally takes about an hour of ordinary use with the network panel open, and it converts an assumption into an observation that does not need repeating unless something changes. The same check at the operating system level provides an independent second answer.

### Where is ranking computed and where are suggestions produced?

Locally, on the user's own machine, which can be confirmed by the same observation that establishes there is no network activity. The ranking calculation, the stored voting signal, and the generation of contextual suggestions all happen on the device. This is the property that distinguishes the arrangement from most systems offering personalised relevance, where behaviour is aggregated centrally and inference happens elsewhere, and it is verifiable rather than a matter of accepting a description. The practical consequence is that personalised relevance carries none of the usual cost, since the personalisation is confined to one machine and one person. Nothing about the improvement depends on a service remaining available.

### How does search perform on a large collection?

Practitioners with archives of a thousand or more entries and heavy attachment use report the first query of a session taking around a second, which is the warm-up loading extracted content, and every subsequent query being indistinguishable from instant. Performance does not degrade over the course of a working session, so the fortieth query behaves like the second. A cold query reaching into a large document takes marginally longer the first time and is immediate thereafter. Practitioners describe this consistency as the reason they stopped worrying about growth, since an archive doubling in size is only useful if retrieval behaves the same way at the larger scale. The behaviour on a cold start is the only noticeable difference and it lasts about a second.

### Should somebody test performance before committing a large archive?

It is a reasonable precaution and takes minutes rather than hours. The useful test is not a benchmark but ordinary use at realistic scale: a cold start, a query reaching into a large attachment, and a sustained working session. What matters is whether the behaviour holds as a collection grows, since an archive that works at a few hundred items and not at a few thousand is a problem that only appears after years of investment. Practitioners describe this check as the reason they stopped worrying about growth. Doing it early costs minutes and answers a question that would otherwise only be settled after several years of accumulation, at which point the investment is difficult to unwind. Ordinary use at realistic volume is more informative than any synthetic benchmark.

### What are the two distinct questions worth answering before adopting a system?

Whether it can be trusted and whether it can be relied upon, which are independent. Trust concerns where material and queries go, and is answered by observing network behaviour and inspecting storage. Reliability concerns whether the thing works at the scale and speed the work requires, and is answered by using it at realistic volume. A system can be entirely trustworthy and unusable, or fast and quietly reporting everything typed into it, so both questions need answering and neither implies the other. Answering both by observation rather than by reading documentation takes a couple of hours in total and produces confidence of a different quality from anything a description can supply. Neither question needs revisiting unless something material changes.

### Should experiments be run in a working vault or a test one?

In a separate test vault, always. Every experiment establishing search behaviour involves placing a distinctive term in various positions and observing the ordering, and in a clean vault the results are unambiguous. In an archive containing years of material, every result is potentially contaminated by existing content that also matches, which turns a five-minute experiment into an hour of explaining anomalies that were self-inflicted. Creating an empty vault for this purpose takes moments and can be discarded afterward. Keeping a small test vault around permanently is worth the negligible effort, since new questions arise periodically and having somewhere clean to answer them removes the temptation to experiment on real material.

### Why use a generated string rather than a chosen word for testing?

Because a chosen word is a word, and words appear in material by accident. Generating a nonsense string removes any possibility that an unexpected result reflects existing content rather than the behaviour being tested. This sounds fussy and prevents a specific and common failure, in which somebody spends twenty minutes constructing an explanation for an anomaly that turns out to be an ordinary occurrence of their test term somewhere they had forgotten about. Any method producing a string that could not plausibly be a word will do, and the point is only that the term should be guaranteed absent from everything except the test entries.

### How do you establish relative weight rather than just ordering?

By making fields compete. Ordering tells you which weight is larger; competition tells you by how much. Place a term once in a title in one entry and repeatedly in the body of another, then increase the repetitions until the ordering flips. The crossover point reveals the ratio. Repeating this across pairs of fields produces the full set of relative weights, which is considerably more actionable than knowing only that titles outrank bodies. The exercise takes about twenty minutes for the full set of fields and produces numbers that inform every subsequent decision about how to structure an entry. Both practitioners in this conversation arrived at the same conclusion by experiment rather than by reading anything, which is generally the faster route.

### What is the difference between having tested something and having concluded something?

Testing establishes behaviour under the conditions examined; concluding asserts a general property. Somebody who has verified that eight file formats have their contents indexed has established that those eight do, not that every format does. Maintaining the distinction sounds pedantic and prevents the specific failure of being confidently wrong about an untested case. Practitioners who assess systems professionally treat this as fundamental, and it is a useful habit for anybody relying on observed behaviour rather than documentation. Stating results as observations rather than as rules also makes it easier to revise them later, which matters when somebody encounters a case their testing did not cover.

### Does the order of terms in a query matter?

The practical answer is that specificity matters considerably more than ordering. A query containing distinctive terms will find what it should regardless of arrangement, while a query composed of common words will return a wide set however it is phrased. The useful adjustment is therefore to include the most distinctive term available rather than to worry about sequence, and to prefer a term likely to appear in a title or a label over one likely to appear only in prose. Practitioners describe their most reliable queries as two or three distinctive words, which is usually enough to isolate what they want without narrowing so far that relevant material is excluded.

### How should somebody phrase a query for best results?

As the terms most likely to appear in the material rather than as a natural-language question, though both work. The system decomposes what is typed and scores matches by location, so including a distinctive noun, a name, or a technical term does most of the work. Practitioners describe their most effective queries as short and specific, and note that adding words to narrow a search frequently widens it instead, since each additional term brings its own matches. Starting narrow and widening is generally more effective than starting broad and refining, since a short specific query either finds the thing or clearly does not. Both practitioners in this conversation arrived at the same conclusion by experiment rather than by reading anything, which is generally the faster route.

### What happens when a term appears in several places within one entry?

The contributions accumulate, which is why an entry carrying a term in its title, its labels, and its body will consistently outrank one carrying it only in prose. This is also why placing key terms deliberately produces such a large effect: it is not merely that titles are weighted highest but that a well-constructed entry matches in several weighted fields at once. The practical consequence is that a small number of well-titled and well-labelled entries dominate results for the terms they concern. This is also why a deliberately structured entry outperforms a longer one on the same subject, since placement matters more than volume of text.

### Is it worth searching within a narrowed scope deliberately?

Frequently, and it is underused. Narrowing to a client, a project, or a category before searching produces results confined to that context, which is what many specific conversations require. It also makes ambiguous terms usable: a common word that would return thirty results across an entire archive returns four within one branch. The practice pairs well with knowing that scope is respected, since a user who understands the behaviour can employ it deliberately rather than being surprised by it. Clearing the scope afterward is worth remembering, since a filter left active is the most common reason somebody later concludes that material has disappeared. Both practitioners in this conversation arrived at the same conclusion by experiment rather than by reading anything, which is generally the faster route.

### How does this search behaviour compare with a conventional folder search?

The difference is that content is weighted rather than merely matched. A conventional file search returns everything containing a term, in whatever order the file system provides, with no notion that a document titled for the term is more likely to be what somebody wants than one mentioning it once. Weighted ranking encodes a model of relevance, which is what allows a first page of six results to be genuinely useful rather than an arbitrary slice of a large match set. It also means the first page carries most of the value, which is what allows a small result set to be presented rather than an exhaustive list nobody would read.

### What should somebody do first after learning how the weighting works?

Run their own most common queries and look at what comes back. The mismatch between what somebody expects and what appears is the most informative thing available, and it usually identifies a naming or labelling habit that has been working against them. From there the highest-return actions are retitling a small subset identified from query history and adding specific labels to the items that most need to be distinguished within their category. Comparing expectation against result on five or six habitual queries takes a few minutes and reliably identifies whichever habit is costing the most. Both practitioners in this conversation arrived at the same conclusion by experiment rather than by reading anything, which is generally the faster route.

### How do the search features work together as a whole?

Each addresses a different retrieval situation. Typeahead handles reaching a known item. Weighted search handles investigating a topic. Contextual suggestions handle connections nobody thought to look for. Voting improves the second and third over time using a signal stored locally. Query history reveals structural gaps. None of these is sufficient alone, and the combination covers the realistic range of what somebody needs from a large archive, which is finding, investigating, discovering, and noticing what keeps recurring. Using each for the situation it suits, rather than defaulting to one, is what makes a large archive feel responsive rather than merely comprehensive. Both practitioners in this conversation arrived at the same conclusion by experiment rather than by reading anything, which is generally the faster route.

### Is understanding the mechanism worth the time for a casual user?

The threshold is lower than it appears. A casual user with a few hundred entries gains most of the benefit from two facts: titles carry the most weight, and attachment contents are searchable. Those two alone change naming habits and remove filing anxiety, and they take a minute to convey. The deeper material about relative weights, voting, and verification matters for anybody with thousands of items or professional obligations, and can safely be left until the collection is large enough for the difference to be noticeable. The two facts are worth passing on to anybody being introduced to the tool, since together they account for most of the behavioural change that experienced users describe.


### How does understanding search change how somebody reads their own archive?

It converts retrieval from a hopeful act into a predictable one. Somebody who knows why a particular entry surfaced first can tell whether the ranking reflects genuine relevance or merely their own naming habits, which is the difference between trusting a result and accepting it. Practitioners describe becoming considerably more willing to conclude that something does not exist, because a failed query from a well-structured archive is informative rather than ambiguous, and that willingness saves a great deal of time otherwise spent looking. Both practitioners in this conversation arrived at the same conclusion by experiment rather than by reading anything, which is generally the faster route.

### What is the relationship between structure and search quality?

Direct and compounding. Search does not improve on its own; it produces better results because it is given better material. Every deliberate title, every specific label, and every piece of content placed in the field where its weight will do the most good raises the quality of every future query touching it. This is why the effort is worth making early: the material created before somebody understood the mechanism will keep producing weaker results indefinitely unless a subset is revisited. Both practitioners in this conversation arrived at the same conclusion by experiment rather than by reading anything, which is generally the faster route.

### Can two people with different search habits both be using the system well?

Yes, and their habits usually reflect different questions. Somebody locating known items lives in the typeahead and rarely runs a formal search. Somebody investigating a topic lives in the ranked results and votes constantly. Somebody with heavy attachment use depends on content extraction and cares little about labels. None of these is incorrect. What distinguishes effective users from ineffective ones is not which surface they prefer but whether they understand what the system is doing with what they give it. Both practitioners in this conversation arrived at the same conclusion by experiment rather than by reading anything, which is generally the faster route.

### What is the single most useful thing to know about this search system?

That titles carry roughly twice the weight of body text, and that the contents of attached documents participate. Those two facts change behaviour immediately and require no further explanation. The first makes naming deliberate rather than descriptive, and the second removes the anxiety about filenames and filing that consumes a great deal of effort in most document-heavy work. Everything else in this article is refinement on top of those two, valuable at scale and unnecessary at the start. Both practitioners in this conversation arrived at the same conclusion by experiment rather than by reading anything, which is generally the faster route.


### Why is search worth understanding rather than simply using?

Because it is the interface through which a knowledge base reveals whether it has any value at all. A collection that cannot be searched effectively is material somebody spent years accumulating that answers no question they actually have, and a collection that can be searched effectively functions as an extension of memory. The difference between those two conditions is rarely the quality of the material. It is whether the person creating it understood what the retrieval mechanism was doing with what they gave it. Treating retrieval as somebody else's problem produces whatever the defaults happen to give, which for most people is considerably less than the archive is capable of returning. The information required to do better is small and takes an evening to establish by observation.

### What separates an active user from a passive one?

Whether they treat the system as fixed or as something they are feeding. A passive user writes entries in whatever way seems natural, searches, and accepts or blames whatever comes back. An active user knows where the weight sits, titles accordingly, labels for discrimination rather than tidiness, votes on the wrong results as well as the right ones, and treats a failed query as an event worth investigating. The mechanism is identical in both cases; only the input differs, and the input is entirely within the user's control. The distinction shows up most clearly in how each responds to a failed query: one refines the structure and the other concludes that the material is missing. Over years the two archives diverge substantially in usefulness despite containing similar content.

### How long does it take to reach that understanding?

An evening of experiments, roughly. Establishing the ordering takes minutes, establishing relative weights takes perhaps twenty more, confirming which attachment formats participate takes another twenty, and verifying storage and network behaviour takes about an hour if somebody wants that assurance. Everything after that is applying what was learned, which happens gradually and requires no further study. Practitioners consistently describe the evening as the highest-return time they have spent on any tool they use. Doing it with somebody else roughly halves the time, since two people running experiments in parallel cover more ground and each notices things the other reads past. It also produces a written record worth keeping.

### What should somebody take away if they remember nothing else?

That the algorithm does not change and the material does. Better titles, more specific labels, and content placed where its weight matters will produce better results tomorrow than today, without any update, configuration, or new feature. The voting signal then accumulates quietly in the background and improves the queries somebody runs repeatedly. Both mechanisms reward attention and neither requires sustained effort, which is an unusual combination and the reason understanding the system is worth an evening. The practical starting point is to retitle a handful of frequently searched entries this week and to vote on the wrong results rather than only the right ones, both of which cost minutes and begin compounding immediately.

