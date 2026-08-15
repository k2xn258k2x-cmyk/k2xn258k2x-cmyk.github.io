---
title: "The Sparkle Pager: AI That Learns How You Work"
description: "A PhD student and a retired professor explore how VaultBook's suggestion system adapts to their habits."
date: 2026-12-16 17:00:00 -0600
cover: /assets/img/feature-screenshot-placeholder.svg
---


Every substantial piece of software now contains something that tries to predict what its user wants next. The mechanisms differ in sophistication and share a structure: observe behaviour, infer preference, and present something before it was asked for. Applied well this genuinely reduces the number of small decisions somebody makes in a day, and small decisions accumulate into a real cost that most people never notice because it has no name.

What is rarely examined is the arrangement underneath. Prediction requires a record of behaviour, and a record of behaviour has to be held somewhere. In the ordinary case it is transmitted, accumulated centrally, and used for several purposes at once: improving the prediction, understanding the population, and frequently supporting a commercial model that has nothing to do with the individual it was collected from. The person receiving the suggestion is also the material from which it was built.

![The Sparkle Pager: AI That Learns How You Work](/assets/img/feature-screenshot-placeholder.svg)

That trade is usually presented as necessary, and for some kinds of prediction it genuinely is. A system attempting to recommend something a person has never encountered, drawn from a catalogue of millions, needs a population to learn from, because one individual's history contains almost no information about what they have not yet seen. Anything that works by finding people similar to you requires other people to be similar to.
<!--more-->


A great deal of useful prediction does not have that shape at all. Somebody working within their own accumulated material is not looking for the unfamiliar. They are looking for what they already have, at the moment it becomes relevant, and the only history that bears on that question is their own. What did they open recently, what do they reliably return to on a particular kind of day, what is scheduled, and what were they in the middle of when they stopped. None of those questions is improved by knowing anything about anybody else.

Which means the population is one, and the population being one changes what is possible rather than merely where the data sits. A model trained across thousands of researchers knows a great deal about research in general and nothing about which four papers a specific person considers foundational. For general knowledge the aggregate wins overwhelmingly. For somebody's own working patterns the aggregate is not merely unnecessary, it is actively wrong, because the useful signal is precisely what distinguishes this person from the average.

Once that is recognised, the architecture follows. A signal generated locally, an accumulated distribution held locally, and inference performed locally are the three components of a learning system, and there is no technical reason for any of them to leave the machine when the population is one. What that produces is privacy as a property of the arrangement rather than as a commitment somebody made, which is a materially different guarantee: policies change and architectures do not.

There is a second consequence that matters more in practice than the privacy argument. A system observing only one person can afford to be honest about what it sees. It has no incentive to increase engagement, no reason to surface something because it performs well across a population, and no interest in anybody returning more often. What remains is a description of what somebody has actually been doing, presented back to them, which is a considerably stranger and more useful object than a recommendation.

What follows is a conversation between two people who use exactly that, heavily, for entirely different purposes, and who had never compared notes.


## Two people who had assumed they used it the same way

Priya had proposed the call after a remark in the group that neither of them could now locate.

‘You said something about the panel that surprised me and I have been meaning to ask about it since,’ she said.

‘I said a great many things,’ Felix said. ‘Narrow it.’

‘You called it a discovery tool.’

‘I did, and I would say it again, and I take it from your tone that you do not think of it that way.’

‘I think of it as a workflow instrument,’ Priya said. ‘Which is a completely different description and we are apparently looking at the same panel.’

‘Then this will be a useful hour.’ Felix settled. ‘Say how you use it and I will resist commenting until you have finished.’

‘You will not resist.’

‘I will not resist and I will apologise afterward, which is the arrangement I have with everybody.’


## Four pages, and neither had read all of them

‘Start with what it actually contains,’ Priya said, ‘because I want to check that we are seeing the same thing.’

‘Four pages, and I will confess before we begin that I have essentially never used two of them.’

‘Which two?’

‘I will not say yet. Describe them and I will point.’

Priya went through it.

‘The first page is suggestions, which is two things stacked: anything scheduled in the next couple of days, and then a reading pattern, which is what I tend to open on this day of the week.’

‘That second part is the one I use.’

‘The second page is recently read, which is up to a hundred entries I have opened, with times, without repeats.’ She continued. ‘The third is recent files, which is attachments rather than entries. The fourth is recent tools.’

‘Then it is the third and fourth I do not use,’ Felix said, ‘and I want to say that I did not know the fourth existed until about eleven seconds ago.’

‘You have never opened it?’

‘I have opened it and closed it, several times, having concluded it was not for me.’ He was cheerfully unembarrassed. ‘Which may turn out to be wrong.’

‘Say what your first page shows.’

He shared. Two lines at the top, and beneath them a short list.

‘The two at the top are writing sessions I have scheduled for myself, which sounds absurd for a retired man and is the only reason the book is progressing.’

‘Why absurd?’

‘Because nobody is expecting me anywhere and I could work whenever I liked, which is precisely the problem.’ Felix shrugged. ‘A man with no obligations and four years of work ahead of him needs an obligation, so I invent them and put them in the calendar and they appear here in the morning.’

‘And the list underneath?’

‘This is the part I find genuinely strange and would defend to anybody.’ He pointed. ‘Those are the three things I tend to open on a Tuesday.’

‘And are they?’

‘They are three chapters concerning the first eleven years of my career, and I have not the faintest idea why Tuesday.’ He laughed. ‘But it is correct. I checked, sceptically, over about six weeks, and it is correct.’

Priya shared hers.

‘Mine on a Monday is protocols and methods,’ she said. ‘Every Monday. Which I did not know about myself and which is entirely explicable once seen.’

‘Say the explanation.’

‘Monday is when I plan the laboratory week, so I am reading what I am about to do rather than what I have done.’ She was matter of fact. ‘And on Thursdays it shows me chapter material, because Thursday is my writing day.’

‘Did you design any of that?’

‘I designed the Monday planning and the Thursday writing, years ago, deliberately.’ She paused. ‘I did not design the correspondence between those and what I open, and I would not have been able to state it before the panel stated it back to me.’


## Three things on a Tuesday

‘I want to spend some time on that,’ Felix said, ‘because it is the part I find hardest to explain to anybody and the part I would least willingly give up.’

‘Say what it is doing.’

‘It is looking at what I have opened, on this day of the week, over the last few weeks, and showing me the three that recur.’ He described it. ‘Which is a modest piece of arithmetic and produces something that feels considerably stranger than arithmetic.’

‘Because it knows something about you.’

‘Because it knows something about me that I did not know, which is a different sensation from being predicted.’ Felix was precise. ‘Prediction is when something guesses what I want. This is when something tells me what I do, and I have to decide whether I approve.’

‘And do you?’

‘In the Tuesday case, yes, entirely, and I have started scheduling around it.’ He shrugged. ‘If three chapters about my early career recur on Tuesdays, then Tuesday is when that material is live in my head, and I should stop trying to work on the difficult later chapters on a Tuesday because I evidently cannot.’

Priya sat forward.

‘That is a considerably more active use than mine.’

‘Say what yours is.’

‘Mine is confirmation, mostly. It tells me what I expected and I nod at it.’ She was thinking. ‘Except once, when it did not, and that once has been worth everything.’

‘Go on.’

‘My Wednesday suggestions were entries from a research direction I had formally abandoned.’ She said it slowly. ‘Which I had abandoned in writing, deliberately, with a sentence explaining why, after discovering that it had four entries in it.’

‘And you were still opening it.’

‘I was opening it on Wednesdays, three weeks in a row, and I had no idea.’ Priya was frank. ‘Which is a fact about my own attention that I could not have reported and would have denied.’

‘What does it mean?’

‘I have decided it means I have not actually abandoned it,’ she said. ‘I have abandoned it as a plan and I have not abandoned it as an interest, and those are different, and the second one is where things come from.’

‘So the panel disagreed with your own written decision.’

‘The panel reported behaviour that disagreed with my own written decision, which is not the same as an opinion and is considerably harder to argue with.’ She shrugged. ‘And I have rescheduled that direction for after submission, again, and this time I think I will actually do it.’

Felix was quiet for a moment.

‘That is the strongest case for this I have heard,’ he said.

‘Say why it strikes you.’

‘Because everything else in my working life describes what I intended.’ He counted it out. ‘My outline describes what I intend to write. My calendar describes what I intend to do. My notes describe what I intended to think about. And that panel describes what I did, and only one of those four is evidence.’


## The month Felix stopped believing it

‘I want to describe a period where I decided the whole thing was nonsense,’ Felix said, ‘because I have been enthusiastic for forty minutes and it is not the whole story.’

‘Go.’

‘Last February. Ellen's sister was ill and we were in Boston for three weeks, and I worked in a hotel room in whatever hours I could find.’ He described it. ‘And when I came back the panel was telling me things that were completely wrong.’

‘Say what it showed.’

‘It had learned Boston.’ He laughed without much humour. ‘Three weeks of erratic hours on unfamiliar material, and the pattern it reported was a pattern of a man in crisis, which was accurate about February and useless in March.’

‘And you were annoyed.’

‘I was extremely annoyed, and I said something ungenerous about it in the group, and Suki replied with one sentence that changed my view entirely.’

‘Which was?’

‘She asked what I expected a description of my recent behaviour to describe.’ Felix shrugged. ‘Which is a fair question and slightly humiliating. It was reporting accurately. I did not like the accurate report.’

‘How long did it take to correct?’

‘About three weeks, which is roughly the window it looks at.’ He was matter of fact. ‘Which is exactly right and which I would not have said at the time. A pattern that ignored three unusual weeks would be a pattern that ignores everything unusual, and unusual is sometimes the point.’

Priya was thinking.

‘There is a version of that in my work,’ she said. ‘Conference weeks.’

‘Say it.’

‘Four or five times a year I am at a conference, and my reading is completely different, and for about a fortnight afterward the suggestions are shaped by it.’ She shrugged. ‘Which I found irritating and now find informative, because what it is showing me is what the conference actually did to my attention.’

‘Which you would otherwise not know.’

‘Which I would otherwise describe as an interesting week and forget.’ Priya nodded. ‘Instead I get a fortnight of evidence about which sessions actually changed what I read, which is a better assessment of a conference than anything I would write in a summary.’

Felix sat back.

‘So the disturbance is data.’

‘The disturbance is data and the recovery is data,’ she said. ‘Because how quickly my pattern returns to normal tells me whether the conference genuinely changed anything or merely interrupted me.’

‘And how often does it change anything?’

‘Once, out of about eleven.’ Priya was frank. ‘And I only know that because I noticed the pattern had not returned, which is not something I would have looked for.’


## A hundred things in order

‘Second page,’ Priya said. ‘And this is the one I use most and the one I would find hardest to justify to somebody.’

‘Recently read.’

‘A hundred entries, with times, without repeats.’ She opened hers. ‘Which sounds like a history list and is not what I use it as.’

‘Then say what it is.’

‘A record of where my attention actually went, in order.’ She was definite. ‘Which is different from a list of what I have opened, because the order is the information.’

‘Give me a case.’

‘Three weeks ago I looked at this and found eleven consecutive entries about one technique, spread across two days, which I had opened without any plan.’ Priya described it. ‘Not a reading list. Not a session I sat down to have. Eleven things I opened because each one led to the next.’

‘Which is a path.’

‘Which is a path, and I had walked it without noticing, and what it told me was that something about that technique had my attention and I had not admitted it.’ She paused. ‘I wrote about it three days later and it became a section.’

‘So you use it to detect your own preoccupations.’

‘I use it to detect what I am circling, which is a thing I am genuinely bad at noticing from the inside.’ She shrugged. ‘Anybody deep in a piece of long work is following something. They frequently cannot say what.’

Felix nodded slowly.

‘Mine is considerably more mundane and it is my most-used page,’ he said.

‘Say it.’

‘Continuity.’ He opened his own. ‘I am seventy-two and I work on a book for two or three hours a day, and I sit down at nine in the morning with no memory whatsoever of what I did yesterday.’

‘None?’

‘A vague impression that it went reasonably, which is not information.’ He was flat about it. ‘So the first thing I do, before anything, is look at that page and see the eight things I opened yesterday in the order I opened them.’

‘And that restores it.’

‘That restores it in about forty seconds, and without it I spend twenty minutes reconstructing, and about a third of the time I reconstruct wrongly and redo something.’ Felix shrugged. ‘Which is not a memory complaint. I was doing exactly the same thing at forty and reconstructing took me ten minutes instead of twenty.’

‘Why does it work so well?’

‘Because it is not a summary, it is a sequence.’ He was precise. ‘A note saying what I did yesterday is a thing I would have to have written, and I do not write it, because at the end of a session I want to stop. A sequence requires nothing of me at all and contains more.’

Priya considered that.

‘The absence of effort is the property.’

‘The absence of effort is the entire property, because anything requiring me to do something at the end of a working session will not be done.’ Felix was emphatic. ‘I have tried. Three times. The record I actually have exists because nobody asked me to produce it.’


## The two pages neither of them used

‘Now the ones you have never opened,’ Priya said.

‘I have opened them, dismissively, which is worse.’

‘Then let us look at them properly, because I use one of them constantly and I suspect you would use the other.’

She shared the files page.

‘Attachments rather than entries,’ she said. ‘Which for me is the thing that saves the most time in any given week.’

‘Say why.’

‘Because I read papers across several sessions.’ Priya described it. ‘I open a document, get through two thirds of it, and something interrupts. And the next day I want to return to it and I know almost nothing about how to find it.’

‘You know the paper.’

‘I know approximately what it was about and I do not know its title, its authors, or which entry it is attached to, because I opened it from a search result and did not register any of that.’ She shrugged. ‘Which sounds careless and is what actually happens when you are reading rather than filing.’

‘And the page.’

‘And the page has it at the top, because I opened it yesterday, and I am back where I was in four seconds.’

Felix was looking at his own.

‘Mine is photographs,’ he said slowly.

‘Say more.’

‘I am writing a chapter about a woman I worked with for six years, and there are four photographs of her, and I have been opening them repeatedly for about a fortnight.’ He was scrolling. ‘And every time I want one I have been going to the entry and finding the section and opening it, which is perhaps twenty seconds.’

‘And here?’

‘And here they are at the top of a list, all four, because they are the things I have most recently opened.’ He shook his head. ‘Which is not a revelation and it is twenty seconds several times a day for a fortnight, and I have been doing it the long way because I decided this page was not for me.’

‘Now the fourth.’

‘Which I genuinely did not know existed.’

Priya showed hers.

‘Recently used tools,’ she said. ‘Mine shows the analysis tool and the search tools, because those are what I reach for.’

‘And it is ordered by use.’

‘Ordered by what I have actually used, which means it becomes a launcher shaped like me rather than a menu shaped like the application.’ She was matter of fact. ‘I have never once scrolled past the first three items.’

‘What would mine show?’

‘Open it.’

He did.

‘The reader and the photograph viewer,’ Felix said. ‘Which is correct and which I could have told you, and which does not immediately look useful.’

‘Then say why it might be.’

‘Because those are two clicks away otherwise and one click away here, several times a day.’ He was working it out with visible reluctance. ‘Which is trivial and which is also exactly the kind of trivial thing I have been complaining about for a year without identifying.’

‘Raj would see the board at the top,’ Priya said.

‘Raj would see the board and would tell everybody about it at length,’ Felix agreed.


## What is coming and what you keep doing

‘There is a thing about the first page that I want to name properly,’ Priya said, ‘because it took me a while to notice that it is doing two different jobs at once.’

‘The scheduled part and the pattern part.’

‘Which are completely different kinds of information sitting in the same place.’ She was precise. ‘One is what I have committed to. The other is what I habitually do. And putting them together produces something neither would produce alone.’

‘Say what.’

‘An honest picture of the day.’ Priya described hers. ‘Today it shows a supervision meeting tomorrow morning, a laboratory booking on Thursday, and three protocol entries because it is a Monday.’

‘And what does that tell you?’

‘That my obligations and my habits agree today, which is a good day.’ She shrugged. ‘Some days they do not, and that is the useful signal.’

‘Give me a disagreement.’

‘A Thursday with a deadline on it.’ She was matter of fact. ‘My habit says writing, because Thursday is my writing day, and my calendar says something is due. And those compete, and I would rather see the competition at nine in the morning than discover it at three in the afternoon when I have spent the day writing.’

Felix nodded.

‘Mine is the same and the register is entirely different,’ he said. ‘My scheduled items are appointments I have made with myself, which nobody would enforce, and my patterns are what I actually do.’

‘Which is a test of whether you keep your own appointments.’

‘Which is exactly a test of that and it is uncomfortable about once a fortnight.’ He laughed slightly. ‘When it shows me a writing session I scheduled for this morning and three chapters I habitually open on this day, and the chapters are not the ones the session was for.’

‘What do you do?’

‘I have started believing the pattern rather than the schedule,’ Felix said, ‘which took me some months to permit myself.’

‘Say why that was difficult.’

‘Because the schedule is what I decided and the pattern is what I do, and a lifetime of academic discipline says the decision should win.’ He was frank. ‘And in my seventies, working alone, with no external pressure, I have concluded that the pattern is better information about what I am capable of on a given morning.’

‘That is not laziness.’

‘It is not laziness and I have had to argue myself out of thinking it is,’ he said. ‘It is the difference between what I want to be true about my working habits and what is true, and the second one is what the book is actually going to be built out of.’

Priya asked about the horizon.

‘It shows the next couple of days rather than the week.’

‘Which is correct and I would not want more,’ Felix said immediately. ‘A week is a planning question and I have a calendar for that. This is a question about today, and anything beyond the day after tomorrow is noise in that context.’

‘I agree and I arrived at it the other way,’ Priya said. ‘I found the short horizon frustrating for about a month and then noticed I had stopped opening the calendar in the morning at all.’


## Where the learning happens

‘I want to raise the architectural thing,’ Priya said, ‘because Suki has made me incapable of not raising it.’

‘She has that effect on everybody and I consider it entirely beneficial.’

‘None of this leaves the machine.’

‘None of it, and I want to say what I actually checked rather than what I assume,’ Felix said. ‘Because I am not technical and I did check.’

‘Say what you did.’

‘I opened the panel with the network monitor running, moved through all four pages, opened things from them, and watched the counter.’ He shrugged. ‘Which stayed at nothing. And I did it again a week later because I did not entirely believe the first time.’

‘That is more rigorous than most people manage.’

‘It is considerably less rigorous than what Suki does and it is what I am capable of, and she told me that doing it badly is better than not doing it.’ He was cheerful. ‘Which I found encouraging, coming from her.’

Priya described the implication she cared about.

‘My reading patterns are commercially sensitive,’ she said. ‘Which sounds absurd for a doctoral candidate and is true.’

‘Say why.’

‘Because what I am reading tells you what I am about to publish.’ She was flat. ‘My field has perhaps eleven groups working on adjacent problems, and knowing which techniques somebody is suddenly reading heavily about is genuinely informative about where they are going.’

‘That is not paranoia.’

‘It is not paranoia and it is also not something I would have thought about before the panel existed,’ Priya said. ‘Because before, my reading pattern was not an object. Now it is an object, and an object can be somewhere, and I care where.’

‘That is a considerably sharper statement of it than mine.’

‘Say yours anyway.’

‘Mine is that the material is about people who are mostly dead and one who is not.’ Felix was quieter. ‘And what I open, and how often, and on which days, is a description of what I am currently unable to stop thinking about.’

‘Which is not information about your work.’

‘Which is information about me, and considerably more revealing than anything in the chapters, because the chapters are edited and the pattern is not.’ He shrugged. ‘A man who opens the same difficult chapter eleven times in a fortnight and writes nothing has told you something he has not told anybody.’

Priya was quiet for a second.

‘I had not thought about the not-writing being visible.’

‘It is the most visible thing on that page and it is invisible to everybody except me,’ Felix said, ‘and the reason it is invisible to everybody except me is architectural rather than a promise anybody made, and that is the whole of the argument as far as I am concerned.’

They discussed the population question, which Priya raised.

‘There is a version of this trained on thousands of people,’ she said, ‘and it would be better at some things and useless at mine.’

‘Say the split.’

‘A system trained on a population knows what researchers read, which is a fact about my field and which I already know.’ She counted. ‘It does not know that I read protocols on Mondays, because that is not true of researchers, it is true of me.’

‘So the aggregate is wrong for this.’

‘The aggregate is not merely unnecessary, it would actively degrade this,’ Priya said. ‘Because the useful signal is precisely what distinguishes me from the average, and averaging is the one operation that destroys it.’

‘That is the cleanest argument I have heard for a population of one.’

‘It is Suki's, adapted,’ she admitted. ‘She said it about the related entries suggestions and I have been repeating it ever since.’


## What it cannot see

‘I want to be fair to it by being clear about its limits,’ Priya said, ‘because we have both been describing something that looks cleverer than it is.’

‘Say the limits.’

‘It knows what I opened. It does not know what I did there, or why, or whether it was any good.’ She counted. ‘An entry I opened for four seconds because I misread a title and an entry I spent an hour with look identical to it.’

‘Does that matter?’

‘It matters for exactly one thing, which is that a heavy weekday pattern might be a genuine habit or might be eleven accidental openings of a badly named entry.’ Priya shrugged. ‘And I had one of those. A protocol with a title so close to another that I opened the wrong one repeatedly for about a month.’

‘Which showed up as a pattern.’

‘Which showed up as a pattern and which I acted on for two weeks before working out that I did not read that protocol at all, I merely opened it.’ She laughed. ‘Which is a naming problem wearing a suggestion problem's clothes.’

‘What did you do?’

‘Renamed the entry, and the pattern disappeared within a fortnight, which was itself a satisfying confirmation of what had happened.’

Felix offered his own.

‘Mine is that it cannot distinguish between working on something and avoiding something,’ he said.

‘Say more.’

‘There is a chapter about a decision I made in a hiring committee in my forties, and it is the most difficult thing in the book.’ He was quieter. ‘And I open it constantly. It is at the top of every list. And I have written about four hundred words in it in five months.’

‘So the pattern says it is central.’

‘The pattern says it is central and the pattern is correct, and what it cannot tell me is that I open it and then go and do something else.’ Felix shrugged. ‘Which is information I have to supply, and which I supplied to myself about a month ago while looking at that list and feeling uncomfortable.’

‘So it prompted the realisation.’

‘It prompted the realisation without containing it, which I think is the honest description of what this does.’ He was definite. ‘It reports. The interpretation is entirely mine and it should be, because an interpretation offered by a machine about why I am avoiding a chapter would be an intrusion and would probably be wrong.’

Priya was quiet for a moment.

‘I would rather it did not try,’ she said.

‘I would rather it did not try and I want to say why, because it is not squeamishness.’ Felix leaned forward. ‘A system that reports gives me evidence and leaves me the work. A system that interprets gives me a conclusion and I have to evaluate the conclusion, which is harder than evaluating the evidence and considerably easier to get wrong.’


## The thing that does not happen

‘I want to name something that is absent,’ Felix said, ‘because it is the property I value most and it consists of nothing occurring.’

‘Go on.’

‘It does not want me to open it.’ He said it plainly. ‘There is no indicator, no count, no coloured mark suggesting there is something new. It sits there and I go to it when I go to it.’

‘Which sounds like an absence of a feature.’

‘It is an absence of a feature and it is the reason I have used it every day for two years.’ He was emphatic. ‘I have abandoned four things in my life that were better than this and kept talking to me.’

‘Say what talking to you means.’

‘A number in a corner. A dot. A message telling me I had not looked at something.’ Felix counted them. ‘All of which are designed to produce a small anxiety that resolves when you open the thing, and all of which work, and all of which I eventually resented enough to leave.’

Priya was nodding.

‘I would put it more coldly,’ she said. ‘Anything measuring engagement will eventually optimise for engagement, and a thing optimising for engagement is not working for you.’

‘Whereas this measures nothing.’

‘Whereas this measures nothing about whether I look at it, has no interest in whether I return, and would behave identically if I opened it once a month.’ She shrugged. ‘Which means what it shows me has no motive in it.’

‘That is the property that makes it credible,’ Felix said.

‘It is exactly the property that makes it credible, and it is the same argument as the analytics panel.’ Priya was working it out. ‘A count I generated by working is evidence. A congratulation from a machine is nothing. And a suggestion with no incentive behind it is a description, and a suggestion with an incentive behind it is an advertisement, however accurate it happens to be.’

Felix laughed.

‘You have just described the entire industry in one sentence and I would like it in writing.’

‘Suki would say it better.’

‘Suki says everything better and she is not on this call, so it stands as yours.’


## What each of them is changing

‘Practical closing,’ Priya said. ‘What are you actually doing differently after this?’

‘Two things and I am irritated about both,’ Felix said.

‘Say them.’

‘I am going to use the files page, having spent a fortnight opening four photographs the long way, several times a day, while a list of exactly those four photographs sat one click away.’ He was rueful. ‘Which is not a large saving and it is a large number of small ones and I have been paying it because I decided in my first month that page was not for me.’

‘And the second?’

‘The tools page, which I have never opened, and which I am going to use for the reader specifically.’ He shrugged. ‘Because the reader is the thing I open first every morning and I have been navigating to it every single day for two years.’

‘That is about a thousand navigations.’

‘That is about a thousand navigations and I would rather you had not calculated it.’

Priya's was different.

‘Mine is the weekday pattern and I am going to start acting on it rather than nodding at it,’ she said. ‘Which is what you do and I do not.’

‘Say what acting on it means.’

‘If it tells me I read protocols on Mondays, then I should stop scheduling anything else that requires concentration on a Monday morning, because apparently that is what my head is doing anyway.’ She was thinking as she spoke. ‘I have been treating the pattern as an observation and you treat it as a constraint, and the constraint version is more useful.’

‘It is more useful and it took me a year to permit myself.’

‘And the abandoned direction that keeps appearing on Wednesdays.’

‘What are you going to do about that?’

‘I am going to give it a Wednesday afternoon,’ Priya said. ‘Formally, in the calendar, once a fortnight. Because either it stops appearing, which means I have finished with it, or it produces something, which means I was right to keep opening it.’

‘That is an experiment rather than a decision.’

‘That is an experiment, and I designed it in the last four minutes, and it exists because a panel told me something about myself that I would have denied.’


## A mirror rather than an oracle

The interesting thing about the arrangement those two describe is not the sophistication of the prediction, which is modest, but what it declines to do.

It does not attempt to know things about research, or writing, or any domain. It does not draw on a population, because the population is one and the useful signal in a single person's working life is precisely what distinguishes them from an average. It does not seek attention: there is no count, no indicator, and no mechanism designed to produce the small anxiety that resolves when somebody opens something. And it does not transmit anything, which both practitioners had verified themselves rather than accepted, one of them twice because he did not entirely believe the first result.

What it does instead is report. Four surfaces, each answering a different question about what somebody has actually been doing. What is scheduled in the next couple of days, and what they habitually open on this day of the week. Which entries they have read recently, in order, without repeats. Which files they had open. Which tools they reach for. None of that requires any intelligence about the world, and all of it requires an accurate record of one person.

The weekday pattern is where both described something genuinely unexpected, and the reason is worth stating carefully. It is not prediction, which would be a guess about what somebody wants. It is a description of what they do, which they then have to evaluate, and the evaluation is frequently uncomfortable. A memoirist discovered that three chapters covering his early career recur on Tuesdays for reasons nobody can explain and stopped fighting it. A doctoral candidate discovered that a research direction she had formally abandoned, in writing, with a stated reason, was still being opened weekly, which is a fact about her attention that she would have denied if asked.

That distinction between intention and behaviour runs through everything. An outline describes what somebody intends to write, a calendar describes what they intend to do, and notes describe what they intended to think about. Only one surface in a working life describes what actually happened, and it is the one nobody has to maintain. Both practitioners identified the absence of effort as the decisive property: any record requiring something at the end of a session will not be produced, because at the end of a session people want to stop.

The continuity use is the most mundane and the most frequent. Somebody sitting down in the morning with no reliable memory of the previous day recovers it in under a minute from a sequence of eight things, in order, and describes the alternative as twenty minutes of reconstruction that is wrong about a third of the time. A sequence contains more than a summary would and costs nothing to produce, which is an unusual combination.

The pages people dismiss turn out to be the ones that quietly cost them. Both had written off surfaces after a glance in their first month and both discovered during the conversation that they had been performing an operation the long way several times a day for years, while a list of exactly what they wanted sat one action away.

Underneath all of it is the architectural point, which both reached from different directions. A researcher whose reading pattern indicates what she is about to publish, in a field with eleven adjacent groups, has an interest in that pattern being an object that exists in exactly one place. A memoirist whose repeated opening of a difficult chapter, followed by writing nothing, is the most revealing thing about his current state, has an interest in that being visible to nobody. Neither is describing a policy they trust. Both are describing an arrangement in which the question does not arise, and the difference between those is the whole reason the thing gets used for material that matters.


## FAQs

### What is the suggestion panel actually showing?

Four surfaces, each answering a different question about the user's own behaviour. The first combines anything scheduled in the next couple of days with the entries habitually opened on this day of the week. The second lists recently read entries in order, without repeats, with times attached. The third shows recently opened attachments. The fourth shows recently used tools. None of it requires knowledge about any domain, and all of it requires an accurate record of one person's activity. Practitioners frequently use only two of the four for months before discovering that the others address something they had been doing the long way. Practitioners in unrelated fields arrive at the same conclusion independently, which suggests it reflects the nature of the problem rather than any particular kind of work.

### How does the weekday pattern work?

By observing which entries somebody opens on each day of the week across a recent window and surfacing the ones that recur. The arithmetic is modest and the result frequently is not, because most people have never seen their own weekly rhythm described. Practitioners report accurate patterns they could not have stated in advance: protocols on Mondays because that is when a laboratory week gets planned, or a particular category of material on Tuesdays for reasons nobody can explain. The mechanism is modest and the effect is not, largely because almost nobody has ever seen their own week described back to them. It is one of the observations that costs nothing to act on and produces a return every subsequent week.

### Is this prediction or description?

Description, and the distinction matters more than it appears. Prediction guesses what somebody wants and is either right or wrong. Description reports what they have done and has to be evaluated, which is a different and frequently uncomfortable experience. Practitioners describe the sensation as being told something about themselves rather than being anticipated, and note that the second requires no response while the first requires them to decide whether they approve. Anybody encountering it for the first time should expect the second experience, which is why the initial reaction is frequently discomfort rather than convenience. Anybody uncertain can settle it by looking at what the surfaces actually show about their own past fortnight.

### What happens when the pattern contradicts a deliberate decision?

It generally indicates that the decision was about intention rather than about attention. One practitioner discovered that a research direction she had formally abandoned in writing, with a stated reason, was still being opened weekly. Her conclusion was that she had abandoned it as a plan and not as an interest, which are different, and that the second is where work tends to come from. That kind of contradiction is difficult to produce by any other means. Practitioners describe such contradictions as the most valuable thing the panel produces, precisely because nothing else in a working life reports on attention rather than intention. The effect is cumulative rather than immediate, which is why the feature is easy to underrate during the first month.

### Should somebody act on a pattern or just observe it?

Practitioners disagree productively about this. One treats patterns as observations and nods at them. The other treats them as constraints and schedules around them, on the grounds that if a category of work recurs on a particular day then that is when the material is live and fighting it is unproductive. The second position takes longer to permit oneself, since it means believing behaviour over intention, and practitioners who adopt it describe it as more useful. Trying the constraint version for a fortnight costs nothing and settles the question, since the schedule can always be reverted. Practitioners in unrelated fields arrive at the same conclusion independently, which suggests it reflects the nature of the problem rather than any particular kind of work.

### Why does the panel show only a couple of days ahead?

Because the question it answers is about today rather than about the week. A longer horizon is a planning question and belongs in a calendar, where the whole shape can be examined. Anything beyond the day after tomorrow is noise in a surface intended to answer what somebody should be attending to now. Practitioners report initially finding the short horizon frustrating and then noticing they had stopped opening a calendar in the morning entirely. Anybody wanting a longer view already has a calendar, and keeping the two surfaces answering different questions is what makes both useful. It is one of the observations that costs nothing to act on and produces a return every subsequent week.

### What does combining scheduled items with habits produce?

An honest picture of a day, including the days when the two disagree. Obligations and habits usually align, which is unremarkable. The useful signal is the mismatch: a deadline falling on somebody's habitual writing day, or a session scheduled for one purpose alongside three entries the person actually opens on that day. Seeing the conflict in the morning is considerably better than discovering it in the afternoon. Looking at it once at the start of the day, rather than in passing, is what makes the mismatch visible while there is still time to act on it. Anybody uncertain can settle it by looking at what the surfaces actually show about their own past fortnight.

### How is the recently read page different from a history list?

Because the order carries information. A list of what somebody opened is inventory. A sequence in which each item led to the next is a path, and practitioners describe finding clusters they had walked without noticing: eleven consecutive entries about one technique, opened across two days, with no plan behind them. That kind of cluster indicates where attention has gravitated, which people deep in long work are notoriously bad at perceiving from the inside. Reading it as a path rather than as a list is a small shift in attention that changes entirely what somebody gets from it. The effect is cumulative rather than immediate, which is why the feature is easy to underrate during the first month.

### What is the continuity use of recently read?

Recovering yesterday. Practitioners describe sitting down with no reliable memory of a previous session beyond a vague impression that it went reasonably, which is not information. Reading eight items in the order they were opened restores the state in under a minute, against roughly twenty minutes of reconstruction that is wrong a third of the time. This is not a memory complaint; the same reconstruction was happening decades earlier and simply took less time. Making it the first thing opened each morning, before anything else, is what turns it from a curiosity into part of a working routine. Practitioners in unrelated fields arrive at the same conclusion independently, which suggests it reflects the nature of the problem rather than any particular kind of work.

### Why is a sequence better than a written summary?

Because the sequence requires nothing at the end of a session and contains more. Anything demanding an action when somebody wants to stop working will not be produced, and practitioners describe having attempted an end-of-session note several times and abandoned it on each occasion. The record they actually have exists precisely because nobody had to write it, which is the general property of anything generated as a side effect of working. Anybody who has abandoned an end-of-session note several times should stop attempting it and rely on the sequence instead. It is one of the observations that costs nothing to act on and produces a return every subsequent week.

### What is the recent files page useful for?

Returning to material read across several sessions. Somebody who opens a document, gets two thirds of the way through it, and is interrupted frequently knows nothing useful about how to find it again: not the title, not the authors, not which entry it was attached to, because they opened it from a search result while reading rather than while filing. A list of recently opened attachments puts it at the top and removes the problem entirely. Practitioners describe this as the surface that saves the most time per week while producing no sense of having saved anything, which is why it goes unnoticed. Anybody uncertain can settle it by looking at what the surfaces actually show about their own past fortnight.

### Why do people dismiss some of these pages?

Because a glance in the first month gives no indication of value, and the value depends on a working pattern that has not yet formed. Practitioners describe having written off surfaces early and discovering, sometimes years later, that they had been performing an operation the long way several times a day while a list of exactly what they wanted sat one action from where they were. The remedy is to revisit dismissed surfaces after a few months of real use. Setting a reminder to revisit a dismissed surface after three months is a small habit that occasionally recovers something worth having. The effect is cumulative rather than immediate, which is why the feature is easy to underrate during the first month.

### What does the recent tools page do?

Presents the tools somebody actually uses, ordered by use, which turns a menu shaped like the application into a launcher shaped like the person. Practitioners describe never scrolling past the first three items, since those are the tools they reach for constantly. The saving per use is small and the frequency is high, which is the general shape of everything on these surfaces. The saving is a single action repeated many times a day, which is precisely the category of cost people complain about without ever locating. Practitioners in unrelated fields arrive at the same conclusion independently, which suggests it reflects the nature of the problem rather than any particular kind of work.

### Does any of this require configuration?

None of it. The patterns emerge from ordinary use, the lists populate themselves, and nothing needs to be enabled, tuned, or maintained. This matters because anything requiring setup gets configured once, during the period when somebody knows least about their own working patterns, and is rarely revisited. A surface that describes behaviour without being told anything remains accurate as habits change. This also means it remains accurate through a change of project, role, or routine, which a configured arrangement never does. It is one of the observations that costs nothing to act on and produces a return every subsequent week. Practitioners who have used this for a year or more describe the conclusion as having become obvious only in retrospect, which is worth bearing in mind for anybody currently deciding whether the panel is worth returning to.

### Where is the behavioural data stored?

Locally, as part of the user's own state, which practitioners verify rather than assume. The check is straightforward: open the panel with a network monitor running, move through the pages, open things from them, and observe that no requests occur. Several describe repeating it a week later because they did not entirely believe the first result, and note that an imperfect personal verification is considerably better than none. Doing the check personally, even imperfectly, produces a different quality of confidence from reading a description of the behaviour. Anybody uncertain can settle it by looking at what the surfaces actually show about their own past fortnight.

### Why does local processing matter for suggestions specifically?

Because a reading pattern is unusually revealing. A researcher's recent reading indicates what they are about to publish, which in a field with a small number of adjacent groups is genuinely informative to competitors. A writer's repeated opening of one difficult passage, followed by writing nothing, describes their current state more accurately than anything they have produced. Both are more disclosing than the material itself, because material is edited and behaviour is not. Anybody in a competitive field should consider what their own recent reading would tell somebody who could see it, since the answer is usually more than they expect. The effect is cumulative rather than immediate, which is why the feature is easy to underrate during the first month.

### Would a system trained on many users be better?

For general knowledge, considerably. For this, no, and not merely because of privacy. A model trained across thousands of researchers knows what researchers read, which is a fact about a field somebody already knows. It cannot know that this particular person reads protocols on Mondays, because that is not true of researchers, it is true of them. Averaging is the single operation that destroys the signal these surfaces exist to report. The distinction is worth understanding, since it explains why one kind of intelligence genuinely requires a population and another actively suffers from one. Practitioners in unrelated fields arrive at the same conclusion independently, which suggests it reflects the nature of the problem rather than any particular kind of work.

### What does it mean that the population is one?

That the entire learning system, meaning the signal, the accumulated distribution, and the inference, has no reason to leave the device. Nothing about one person's working rhythm is improved by knowing anything about anybody else's. This makes privacy a property of the arrangement rather than a commitment somebody made, which is a materially different guarantee, since policies change and architectures do not. It also means the arrangement cannot quietly change, since there is nothing to change: no service, no account, and nothing to transmit. It is one of the observations that costs nothing to act on and produces a return every subsequent week. The general principle is that a description of one person's behaviour needs nobody else's, and every property described here follows from taking that seriously rather than from any additional cleverness.

### Why does the absence of notification matter so much?

Because anything measuring engagement eventually optimises for engagement, and something optimising for engagement is not working for its user. There is no count, no indicator, and no mark suggesting something new. Practitioners describe having abandoned better tools that kept talking to them, and identify the silence as the reason they have used this one daily for years. A suggestion with no incentive behind it is a description; one with an incentive is an advertisement, however accurate. Anybody who has abandoned a tool without being able to say why should consider whether this was the reason, since it is rarely identified at the time. Anybody uncertain can settle it by looking at what the surfaces actually show about their own past fortnight.

### How does this compare with the analytics panel?

They are the same argument applied to different data. Analytics report what somebody produced; suggestions report what they attended to. Both are credible precisely because neither was assembled to make a case, neither congratulates anybody, and neither has any interest in being looked at. Practitioners describe both as mirrors rather than dashboards, and note that the absence of any motive is what makes the information believable. Using both, at different intervals, gives somebody a description of what they produced and a description of what they attended to, which are genuinely different questions. The effect is cumulative rather than immediate, which is why the feature is easy to underrate during the first month.

### How long before the suggestions become accurate?

The recent lists are useful immediately, since they only require activity. The weekday pattern needs several weeks of behaviour before it has anything to report, which means early users see little and should revisit rather than conclude. Practitioners describe checking sceptically over a month or so before believing it, which is a reasonable posture and the one that produces confidence rather than assumption. Checking sceptically over several weeks, rather than accepting or dismissing early, is the posture practitioners describe as having produced their confidence. Practitioners in unrelated fields arrive at the same conclusion independently, which suggests it reflects the nature of the problem rather than any particular kind of work.

### What if somebody's working pattern changes?

The surfaces follow, because they describe a recent window rather than a fixed history. Somebody who changes their working days, moves onto a different project, or shifts their routine will see the patterns adjust within a few weeks. This is one advantage of behavioural description over configuration: a setting made once remains wrong indefinitely, while a description of recent behaviour corrects itself without anybody noticing. This self-correction is one of the quieter advantages of description over configuration and is generally noticed only in retrospect. It is one of the observations that costs nothing to act on and produces a return every subsequent week. Trying it deliberately for a few weeks, rather than glancing once and forming a view, is what separates the people who find it useful from the people who dismissed it in their first month.

### Does this work for people with irregular schedules?

The weekday pattern is less informative for genuinely irregular work, since it depends on days of the week meaning something. The other three surfaces are unaffected, because they describe recency rather than periodicity, and practitioners with irregular patterns generally report using those heavily and ignoring the first. Anybody on a rotating or unpredictable schedule should expect the same split rather than concluding the panel has nothing to offer. Knowing in advance which surfaces will and will not apply prevents somebody concluding the whole panel is useless on the basis of one page. Anybody uncertain can settle it by looking at what the surfaces actually show about their own past fortnight.

### What is the single most valuable thing here?

The distinction between intention and behaviour. An outline records what somebody intends to write, a calendar what they intend to do, and notes what they intended to think about. These surfaces record what happened, which is the only evidence available and the only one nobody has to maintain. Practitioners describe acting on that evidence, sometimes against their own written decisions, and consistently describe the result as an improvement. Acting on that evidence occasionally means overruling a written decision, which is uncomfortable and is generally the right call. The effect is cumulative rather than immediate, which is why the feature is easy to underrate during the first month.

### What should somebody do first with this panel?

Open all four surfaces, including any they previously dismissed, and look at what each is showing about the past fortnight. Practitioners frequently discover something within minutes: a pattern they could not have stated, a cluster indicating a preoccupation, or a list containing exactly the thing they have been finding the long way. After that, the useful habit is checking the first surface once in the morning and leaving the rest until something prompts them. The whole exercise takes about ten minutes and reliably produces at least one observation worth acting on. Practitioners in unrelated fields arrive at the same conclusion independently, which suggests it reflects the nature of the problem rather than any particular kind of work.

### What happens to the patterns during an unusual period?

They report the unusual period, accurately, which people frequently find irritating. Somebody working erratically for three weeks because of illness, travel, or a crisis returns to find their patterns describing that period rather than their normal life. The reasonable response is that a description of recent behaviour describes recent behaviour, and a system ignoring anything unusual would ignore exactly the periods that sometimes matter most. The patterns correct themselves within a few weeks. It is one of the observations that costs nothing to act on and produces a return every subsequent week. Practitioners who have used this for a year or more describe the conclusion as having become obvious only in retrospect, which is worth bearing in mind for anybody currently deciding whether the panel is worth returning to.

### Can a disturbance in the pattern be informative?

Frequently, and in two directions. Somebody returning from a conference, a course, or an intensive period sees a fortnight of altered reading, which describes what that event actually did to their attention rather than what they wrote in a summary afterward. The recovery is equally informative: a pattern returning quickly to normal indicates an interruption, while one that does not return indicates genuine change. Practitioners describe identifying which of eleven conferences actually changed anything by exactly this means. Anybody uncertain can settle it by looking at what the surfaces actually show about their own past fortnight. The general principle is that a description of one person's behaviour needs nobody else's, and every property described here follows from taking that seriously rather than from any additional cleverness.

### What does the system know about how an entry was used?

Only that it was opened. It cannot distinguish four seconds from an hour, reading from glancing, or working from avoiding. This is worth understanding because a strong pattern occasionally reflects something other than genuine attention. One practitioner discovered a recurring weekly pattern that turned out to be repeated accidental openings of a badly named entry, which disappeared within a fortnight of renaming it and confirmed the diagnosis in the process. The effect is cumulative rather than immediate, which is why the feature is easy to underrate during the first month. Trying it deliberately for a few weeks, rather than glancing once and forming a view, is what separates the people who find it useful from the people who dismissed it in their first month.

### Can a pattern reveal avoidance rather than engagement?

Yes, and practitioners describe this as among the more uncomfortable things it surfaces. An entry appearing at the top of every list, opened constantly, into which almost nothing has been written across several months, is a description of somebody circling something difficult. The panel cannot say that; it reports the openings. The interpretation belongs to the person, and practitioners generally arrive at it while looking at the list and feeling uneasy. Practitioners in unrelated fields arrive at the same conclusion independently, which suggests it reflects the nature of the problem rather than any particular kind of work. Practitioners who have used this for a year or more describe the conclusion as having become obvious only in retrospect, which is worth bearing in mind for anybody currently deciding whether the panel is worth returning to.

### Should a suggestion system attempt interpretation?

Practitioners are firm that it should not, and the reasoning is practical rather than squeamish. A system that reports supplies evidence and leaves the work of understanding it, which the person is best placed to do. A system that interprets supplies a conclusion, which then has to be evaluated, and evaluating a conclusion is harder than evaluating evidence and considerably easier to get wrong. An interpretation offered about why somebody is avoiding a piece of work would be both intrusive and probably inaccurate. It is one of the observations that costs nothing to act on and produces a return every subsequent week. The general principle is that a description of one person's behaviour needs nobody else's, and every property described here follows from taking that seriously rather than from any additional cleverness.

### How should somebody handle a pattern they do not like?

By treating it as information rather than as a verdict. A pattern reporting that somebody works on easy material during their most productive hours, avoids something they consider important, or reads a subject they have formally abandoned is describing behaviour that was already occurring. The choice is between knowing about it and not, and practitioners consistently describe the knowing as producing a small deliberate change rather than any dramatic reorganisation. Anybody uncertain can settle it by looking at what the surfaces actually show about their own past fortnight. Trying it deliberately for a few weeks, rather than glancing once and forming a view, is what separates the people who find it useful from the people who dismissed it in their first month.

### How does this differ from a recommendation engine?

A recommendation engine tries to surface things somebody has not encountered, drawn from a large catalogue, using the behaviour of similar people. That problem genuinely requires a population, since one person's history says almost nothing about what they have not yet seen. These surfaces address the opposite situation: finding what somebody already has, at the moment it becomes relevant, where the only relevant history is their own and the aggregate would actively obscure the signal. The effect is cumulative rather than immediate, which is why the feature is easy to underrate during the first month. Practitioners who have used this for a year or more describe the conclusion as having become obvious only in retrospect, which is worth bearing in mind for anybody currently deciding whether the panel is worth returning to.

### Does the panel ever tell somebody what to do?

No, and practitioners identify this as important rather than incidental. It shows what is scheduled and what somebody habitually opens, and the decision about what to attend to remains entirely theirs. A system offering instructions would require them to evaluate the instruction, which is a different and harder task than evaluating a description, and it would introduce a judgment about priority that nothing outside the person is in a position to make. Practitioners in unrelated fields arrive at the same conclusion independently, which suggests it reflects the nature of the problem rather than any particular kind of work. The general principle is that a description of one person's behaviour needs nobody else's, and every property described here follows from taking that seriously rather than from any additional cleverness.

### What is the relationship between this panel and search?

They answer different questions and neither substitutes for the other. Search requires knowing what to look for and answers a specific query. These surfaces require nothing and answer a question nobody asked: what have you been doing, what is coming, and what were you in the middle of. Practitioners describe using search dozens of times a day and the panel once or twice, with the second providing orientation and the first providing retrieval. It is one of the observations that costs nothing to act on and produces a return every subsequent week. Trying it deliberately for a few weeks, rather than glancing once and forming a view, is what separates the people who find it useful from the people who dismissed it in their first month.

### How does it interact with a calendar?

By surfacing the next couple of days from it rather than replacing it. A calendar answers planning questions across a week or a month and requires deliberate consultation. The panel answers a question about today and requires none, which is why practitioners report having stopped opening a calendar in the morning after adopting it. Anything requiring arrangement still goes through the calendar, since a two-day horizon cannot support planning. Anybody uncertain can settle it by looking at what the surfaces actually show about their own past fortnight. Practitioners who have used this for a year or more describe the conclusion as having become obvious only in retrospect, which is worth bearing in mind for anybody currently deciding whether the panel is worth returning to.

### Should scheduled items include commitments made only to oneself?

Practitioners working without external accountability describe this as the reason their projects progress. A retired writer, a solo practitioner, or anybody on a long unwitnessed piece of work has no obligations to be reminded of, which is precisely the difficulty. Inventing them, recording them, and encountering them in a morning surface produces a structure that would otherwise not exist, and practitioners describe it as slightly absurd and entirely necessary. The effect is cumulative rather than immediate, which is why the feature is easy to underrate during the first month. The general principle is that a description of one person's behaviour needs nobody else's, and every property described here follows from taking that seriously rather than from any additional cleverness.

### What does it mean when scheduled work and habitual work disagree?

That somebody has planned to do something at a time when they habitually do something else, which is worth knowing before the day rather than afterward. Practitioners describe this arising perhaps fortnightly and describe two responses: moving the scheduled work to a day when the relevant material is live, or accepting that the plan will be harder than expected and allocating accordingly. Either is better than discovering it at three in the afternoon. Practitioners in unrelated fields arrive at the same conclusion independently, which suggests it reflects the nature of the problem rather than any particular kind of work. Trying it deliberately for a few weeks, rather than glancing once and forming a view, is what separates the people who find it useful from the people who dismissed it in their first month.

### Is it healthy to defer to a behavioural pattern over a plan?

Practitioners who have made the shift describe it as taking months to permit themselves, because a lifetime of discipline says the decision should prevail. The argument for the pattern is that it describes capability rather than intention: what somebody actually manages on a given kind of day, which is better information about what is achievable than what they resolved to do. It is not laziness, and distinguishing the two requires being honest about outcomes. It is one of the observations that costs nothing to act on and produces a return every subsequent week. Practitioners who have used this for a year or more describe the conclusion as having become obvious only in retrospect, which is worth bearing in mind for anybody currently deciding whether the panel is worth returning to.

### What kinds of work benefit most from this?

Long, unwitnessed work with no external cadence, which is where people most often lose their footing. Doctoral research, book projects, solo practices, and any multi-year undertaking with milestones far apart all suffer from the same problem: no daily signal about whether things are progressing. Surfaces that describe recent behaviour supply exactly that signal without requiring anybody to produce a report, and practitioners in such work describe it as disproportionately valuable. Anybody uncertain can settle it by looking at what the surfaces actually show about their own past fortnight. The general principle is that a description of one person's behaviour needs nobody else's, and every property described here follows from taking that seriously rather than from any additional cleverness.

### Can a pattern be manufactured deliberately?

Practitioners caution against it, on the same grounds that apply to any self-generated record. The moment somebody opens material in order to influence what a surface reports, the surface stops describing anything and becomes a performance. The value depends entirely on the record being a side effect of working. Anybody catching themselves doing this should treat it as a signal that the surface has been misclassified as a scoreboard. The effect is cumulative rather than immediate, which is why the feature is easy to underrate during the first month. Trying it deliberately for a few weeks, rather than glancing once and forming a view, is what separates the people who find it useful from the people who dismissed it in their first month.

### How much attention should this panel receive?

A minute in the morning and nothing else, according to most practitioners. The first surface answers the question about today. The others are consulted when something prompts them: returning to an unfinished document, recovering yesterday's context, or reaching for a tool. Checking repeatedly through the day converts a description into a preoccupation, and practitioners who notice themselves doing this describe deliberately stopping for a period. Practitioners in unrelated fields arrive at the same conclusion independently, which suggests it reflects the nature of the problem rather than any particular kind of work. Practitioners who have used this for a year or more describe the conclusion as having become obvious only in retrospect, which is worth bearing in mind for anybody currently deciding whether the panel is worth returning to.

### What should somebody expect in their first month?

Very little from the pattern surface and immediate use from the recency ones. Patterns require several weeks of behaviour before there is anything to report, so early users see something thin and frequently conclude the feature is empty. Practitioners advise treating the first month as accumulation and reassessing afterward, at which point the weekday pattern generally produces at least one observation somebody could not have stated about themselves. It is one of the observations that costs nothing to act on and produces a return every subsequent week. The general principle is that a description of one person's behaviour needs nobody else's, and every property described here follows from taking that seriously rather than from any additional cleverness.

### Does this reduce or increase the sense of being watched?

Practitioners consistently report the opposite of what people expect. Being described by something that transmits nothing, has no audience, and cannot benefit from the description produces no sense of surveillance at all. Several note that they write and read more freely knowing the record exists only for them, which is the same effect people describe with local encryption, and that the discomfort they occasionally feel comes from the accuracy rather than from the observation. Anybody uncertain can settle it by looking at what the surfaces actually show about their own past fortnight. Trying it deliberately for a few weeks, rather than glancing once and forming a view, is what separates the people who find it useful from the people who dismissed it in their first month.

### What is the strongest argument for this design?

That intelligence about one person requires only that person. Everything follows: the population is one, so nothing needs to be transmitted; there is no service, so nothing can change its terms; there is no engagement to measure, so nothing has any interest in being opened. What remains is a description with no motive in it, which is the property that makes any information about oneself worth believing. The effect is cumulative rather than immediate, which is why the feature is easy to underrate during the first month. Practitioners who have used this for a year or more describe the conclusion as having become obvious only in retrospect, which is worth bearing in mind for anybody currently deciding whether the panel is worth returning to.


### Can two people use this for entirely different purposes?

Routinely, and the divergence is instructive. One practitioner treats it as a workflow instrument, checking alignment between obligations and habits and optimising a research week around what the patterns report. Another treats it as a discovery tool, using the sequence to recover a creative state and the patterns to decide which material his head is capable of on a given morning. Both use the identical four surfaces and would describe the feature completely differently if asked. The divergence is worth knowing about because it means somebody's own use is unlikely to resemble anybody else's account of theirs, and a description that does not match your working life is not evidence that the feature has nothing to offer. Comparing notes with somebody in a different profession tends to surface a use neither had considered.

### What does somebody in creative work get from it that others do not?

Continuity across sessions, which matters more in creative work than almost anywhere else. Somebody returning to a long piece of writing needs to recover not just what they did but the state they were in, and a sequence of what they opened in order restores considerably more of that than a summary would. Practitioners describe forty seconds of reading replacing twenty minutes of reconstruction, with the reconstruction being wrong a third of the time. The saving compounds daily and is invisible in any single instance, which is why practitioners describe noticing it only when circumstances prevented them from checking. Anybody who begins a working session by trying to remember where they were should try this specifically.

### What does somebody in research work get that others do not?

Detection of their own drift. Long research follows something, and the person following it is frequently unable to say what. A cluster of related entries opened across two days without any plan behind it indicates where attention has gravitated, which practitioners describe converting into a written section within days. The same clusters explain why certain weeks felt productive without anything obvious having been finished. Reviewing the sequence deliberately once a fortnight, rather than only when returning to work, is what turns this from an occasional accident into a reliable diagnostic. Most people find something within the first two attempts. Practitioners describe the combination as producing considerably better self-assessment than either half alone, since the facts constrain the interpretation and the interpretation supplies what the facts cannot.

### Is there a risk of over-interpreting a pattern?

Yes, and practitioners describe two guards. The first is remembering that the surface knows only that something was opened, not what happened afterward, so a pattern may reflect a naming problem or an accident rather than genuine attention. The second is waiting several weeks before acting, since a pattern based on a fortnight of unusual behaviour describes that fortnight. Both guards are simple and both are occasionally forgotten. Waiting a few weeks before acting on anything new costs almost nothing and prevents the most common error, which is treating an unusual fortnight as a description of somebody's ordinary working life. Both guards take a moment to apply.

### What would each of these practitioners tell somebody starting?

Open all four surfaces rather than the first one. Give the pattern surface a month before deciding anything about it, since it needs behaviour to describe. Read the recency sequence in order rather than as a list, because the order carries the information. Do not manufacture patterns. And when something reported contradicts a decision somebody made deliberately, take the contradiction seriously, because it is describing attention rather than intention and only one of those predicts what will actually happen. None of that takes longer than a few minutes to establish, and the last point is the one both of them describe as having changed something substantial about how they work. Attention is the better predictor.


### Does this replace the need to reflect on one's own working habits?

It supplies material for reflection rather than replacing it. Somebody who never examines their working patterns will learn something from a surface that describes them, and somebody who reflects regularly will find their impressions corrected in specific places. Practitioners describe the panel as answering the factual half of the question, meaning what actually happened, and leaving the interpretive half entirely to them, which is where the useful work is. Checking it deliberately during a period that feels unproductive, rather than only when things are going well, is when it does the most good and when nobody thinks to look. Anybody who finds a particular report uncomfortable should sit with it for a week rather than dismissing it, since the discomfort is usually pointing at something worth addressing rather than at a flaw in the description.

### How does this relate to the way people usually assess their own productivity?

It provides the only unbiased input most people have. Every other account is either memory, which exaggerates disruption and erases routine, or a self-assessment produced while trying to reach a conclusion. A record generated as a side effect of working has neither problem, and practitioners describe using it specifically at moments when their own sense of a period seems unreliable, which is generally when it is. Both practitioners in this conversation arrived at that position independently, from a doctoral programme and a memoir project respectively, and neither had set out to make an argument about software architecture. Knowing in advance which surfaces will apply to a particular working life prevents somebody forming a view of the whole panel from one page that was never going to suit them.

### What is the single sentence to take from this?

That a description of one person's behaviour requires nothing but that person, which makes local intelligence not a compromise but the correct architecture for the problem. Everything else follows: no transmission, no population, no service, no engagement to measure, and consequently a description with no motive in it. What somebody does with an honest account of their own attention is their business, and having one at all is unusual. Practitioners describe the combination as producing considerably better self-assessment than either half alone, since the facts constrain the interpretation and the interpretation supplies what the facts cannot. Unlearning that expectation takes a few weeks and is worth doing deliberately, since it changes the relationship from waiting to be told something into going to look.

### Is there a downside to knowing this much about your own habits?

Practitioners report occasional discomfort rather than any downside, and the discomfort is generally accurate. A surface reporting that somebody opens a difficult piece of work constantly and writes nothing in it, or that they read material from a direction they claim to have abandoned, is describing something that was already true. The alternative is not comfort but ignorance, and practitioners consistently describe preferring to find such things themselves rather than discovering them later through a consequence. Anybody who finds a particular report uncomfortable should sit with it for a week rather than dismissing it, since the discomfort is usually pointing at something worth addressing rather than at a flaw in the description.

### What kind of person gets least from this?

Somebody whose work is genuinely varied from day to day, with no recurring rhythm and no long project running underneath it, since the pattern surface depends on repetition to have anything to report. The recency surfaces still apply, because those describe what happened rather than what recurs. Anybody in that position should expect roughly half the value and should not conclude from a thin pattern page that the rest has nothing for them. Knowing in advance which surfaces will apply to a particular working life prevents somebody forming a view of the whole panel from one page that was never going to suit them. Practitioners describe this division of labour as what keeps the panel from becoming another thing to manage, since it is consulted rather than maintained and demands nothing beyond a glance.

### What is the most common misconception about it?

That it is a notification system, which it deliberately is not. There is nothing announcing itself, nothing indicating unread content, and nothing designed to bring somebody back. Practitioners describe having initially waited for it to tell them something and then realising that it never will, and that the waiting was a habit acquired from software with entirely different objectives. It is a surface somebody goes to, not one that comes to them. Unlearning that expectation takes a few weeks and is worth doing deliberately, since it changes the relationship from waiting to be told something into going to look. The saving is not time so much as the small amount of will required to start, which is the resource most people have least of at nine in the morning and never account for.

### How does this fit with the rest of a knowledge system?

It sits above everything else as an orientation layer rather than as a working surface. The structure holds material, search retrieves it, and these surfaces answer the question of where somebody was and what is coming. Nothing else in a knowledge base addresses that, since every other component requires the user to already know what they are looking for. Practitioners describe opening it first and then working entirely elsewhere for the rest of a session. Anybody who has spent the first twenty minutes of a working session deciding what to work on will recognise the negotiation immediately, and most people have simply never named it.

### What is the least obvious benefit people report?

That it removes a small daily negotiation about where to begin. Somebody sitting down without any signal must decide what to work on, which is a decision made with whatever energy is available at that moment and frequently defaults to whatever is easiest. A surface showing what is scheduled and what they habitually do at that hour removes the negotiation, and practitioners describe starting faster without having consciously decided anything. Practitioners describe this division of labour as what keeps the panel from becoming another thing to manage, since it is consulted rather than maintained and demands nothing beyond a glance.


### What should somebody take away if they remember nothing else?

That the surface describes rather than predicts, that the description comes from their own behaviour and nobody else's, and that this is why it stays on their machine. Everything worth having follows from those three facts: a record with no motive, patterns nobody configured, continuity that costs nothing to produce, and information about their own attention that no other part of their working life supplies. Whether they act on any of it is entirely their decision, which is also the point. Both practitioners describe having initially expected something cleverer and having concluded that the modesty of the mechanism is precisely what makes its output believable. A system attempting less is a system with less to be wrong about.

