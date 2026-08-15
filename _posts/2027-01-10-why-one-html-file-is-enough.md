---
title: "Why One HTML File Is Enough"
description: "A cybersecurity consultant, a journalist, and a baker explain the architecture that makes it all work."
date: 2027-01-10 17:00:00 -0600
cover: /assets/img/feature-screenshot-placeholder.svg
---


Software has accumulated a great deal of apparatus, and almost none of it is examined because almost nobody remembers a time before it. An application is installed. It registers itself with an operating system, leaves components in several locations, starts processes that run whether or not anybody asked, checks for updates, verifies a licence against a server, and reports something about its own use. Each of those steps exists for a reason that made sense to somebody, and together they constitute a standard nobody chose.

The accumulation is invisible precisely because it is universal. Ask most people what an application is and they will describe something installed, which is a fact about the last few decades rather than about the nature of software. The question of what is actually required to make a program run has not been asked in general circulation for a very long time, and the answer turns out to be considerably less than the standard arrangement supplies.

![Why One HTML File Is Enough](/assets/img/feature-screenshot-placeholder.svg)

What a program needs is somewhere to execute, instructions describing what to do, and access to whatever it operates on. Every modern machine already contains a capable execution environment that its owner uses daily without thinking of it as one, and that environment can read a set of instructions delivered as a single document. Which means the installation, the registration, the background processes, and the server checks are conveniences and commercial arrangements rather than requirements.
<!--more-->


Removing them produces consequences that are easier to feel than to describe. There is nothing to install and therefore nothing to uninstall. Nothing runs when the thing is closed. Nothing contacts anything, which means no record of use exists anywhere, no dependency on a company's continued operation, and no possibility of terms changing under material somebody has already produced. The application can be copied, carried, and opened elsewhere, because it is a file rather than an arrangement of components distributed across a system.

There is a further property that matters more to some people than all of the others combined, which is that a program delivered as readable instructions can be read. A compiled application is opaque by construction: its behaviour can be observed and cannot be verified, and users are asked to trust a description of what it does. Instructions in text can be examined by anybody with the relevant knowledge, and the possibility of examination is what makes trust reasonable rather than obligatory, whether or not any individual exercises it.

The updating arrangement changes in the same way and for the same reason. Automatic updating is convenient and is also a channel through which arbitrary code arrives on somebody's machine, authorised in advance by a decision made once. An arrangement where a person obtains a new version deliberately, when they choose, and replaces the old one, is slower and removes that channel entirely. For most people the convenience is worth more; for some the removal is worth considerably more, and the point is that the choice belongs to them.

None of this is a technical curiosity. Each property produces a consequence somebody experiences: material that cannot be taken away, a tool that works where there is no connection, an arrangement nobody can change unilaterally, and a program that continues to function regardless of what happens to whoever wrote it. The architecture is the reason those things are true, and they are true for people who could not describe the architecture at all.

What follows is a conversation between three people with very different relationships to that question, prompted by the least technical of them asking, in public, for somebody to explain it.


## The question Amir asked

He had posted it in the group at the end of a working day, and had apologised for it twice within four lines.

He wrote: this is going to be a stupid question and I am asking it anyway.

Can somebody explain to me why this is one file? Yasmin has tried to explain it to me twice and I nod and I do not understand. I open it every morning at four and it works and I have never needed to know. But everybody here talks about it as though it matters enormously and I would like to know why, in words I can follow.

Suki replied within twenty minutes. Lena replied about an hour later. The call happened four days afterward, at an hour that suited Toronto and Tokyo and Stockholm badly and Amir best.

‘I want to say at the start that I have been slightly dreading this,’ Amir said, ‘because I am about to be the least informed person in a conversation between two people who do this professionally.’

‘You are the reason the conversation is happening,’ Suki said. ‘And I would say that anybody who has used something daily for two years and can say plainly that they do not understand it is in a better position than most people, who have not noticed that they do not understand it either.’

‘That is a kind way of putting it.’

‘It is an accurate way of putting it and I have said it to clients,’ she said. ‘Say what you actually want to know.’

‘Two things.’ Amir counted them. ‘What is in the file, in a way I can picture. And why does it matter that it is one file rather than several, or rather than whatever normal programs are.’

‘Then I will do the first and Lena will do the second, because those are our respective jobs.’


## What is actually in there

‘Start with what you already understand,’ Suki said, ‘which is more than you think.’

‘I understand that I double click it and it opens in my browser.’

‘Then you understand the entire arrangement and everything else is detail.’ She was matter of fact. ‘That is not a simplification for your benefit. It is the whole thing.’

‘Say more.’

‘A browser is a program that reads instructions and produces something you can look at and interact with.’ Suki was careful with the words. ‘Normally those instructions arrive from somewhere else, which is what happens when you visit a website. But the browser does not care where they came from. It reads them and does what they say.’

‘So the file is a set of instructions.’

‘The file is a set of instructions and the browser is what carries them out.’ She paused. ‘Which is a thing your machine already has, which you already use every day, and which somebody else maintains and keeps current.’

Amir was quiet for a second.

‘So the browser is like the oven,’ he said. ‘And the file is like the recipe.’

Suki laughed, genuinely.

‘That is a considerably better analogy than the one I was about to use and I am going to steal it,’ she said.

‘Say why it works.’

‘Because an oven is a general-purpose thing that applies heat, and a recipe is a specific set of instructions about what to do with it.’ She counted. ‘The oven does not know what a croissant is. It knows about temperature and time. The recipe supplies the knowledge and the oven supplies the capability.’

‘And you do not need a different oven for every recipe.’

‘You do not need a different oven for every recipe, which is exactly the point, and which is why nothing has to be installed.’ Suki was emphatic. ‘Every machine already has the oven. What arrives is the recipe.’

Lena came in.

‘I want to add the part that made it click for me,’ she said. ‘Which is that a recipe you can read is a different object from a machine somebody sold you.’

‘Come back to that,’ Suki said, ‘because it is your half. Let me finish the contents.’

She listed them, slowly.

‘Inside that one file there are three kinds of instruction and they do three different jobs.’ Suki counted. ‘Instructions describing the structure of what you see, meaning where things are. Instructions describing appearance, meaning colour and spacing and size. And instructions describing behaviour, meaning what happens when you do something.’

‘And the third one is the large part.’

‘The third one is almost all of it, and it includes everything you think of as the application.’ She was precise. ‘The searching. The protection of your encrypted entries. The reading of your attachments. The editor you type into. The tools. All of it is instructions in that file.’

Amir asked the question he said he had been carrying.

‘How can all of that fit in one file?’

‘Because instructions are text and text is small.’ Suki shrugged. ‘Your photographs are considerably larger than the entire application. One photograph of a pastry is bigger than everything that makes the thing work.’

‘That cannot be right.’

‘It is right and it surprises everybody, and it is the same fact you learned about your own storage.’ She was definite. ‘Text is nothing. An enormous amount of capability, written down, is still a small object.’

‘And my recipes and my entries?’

‘Are not in the file. They are in the folder.’ Suki was emphatic about this. ‘Which is the distinction people most often miss and which matters enormously. The file is the tool. The folder is your material. They are separate, which is why you can replace one without touching the other.’

‘So if I got a new version of the file.’

‘You would replace the file and your material would be exactly where it was, untouched, because the new file reads the same folder.’ She shrugged. ‘Which is the same relationship you have with your oven and your ingredients. A new oven does not affect your flour.’

Amir sat back.

‘That is the first time any of this has made sense,’ he said.

‘Then the analogy was yours and you did most of the work,’ Suki said.


## Why it matters, from somebody who needs it to

‘My half is why the shape matters rather than what is in it,’ Lena said. ‘And I have four things, in order of how much I care about them.’

‘Go.’

‘The first is that I can read it.’

‘Read the instructions.’

‘Read the instructions, or have somebody read them.’ Lena was precise. ‘Because it is text rather than something compiled into a form nobody can examine.’

‘Say what compiled means,’ Amir said. ‘Because I have heard the word and I do not know it.’

‘Most programs are converted, before they reach you, into something the machine executes and no person can meaningfully read.’ She was careful. ‘Which is done for good reasons, mostly performance, and which has the effect that you cannot verify what the thing does. You can watch its behaviour and you cannot inspect its intentions.’

‘Whereas here.’

‘Whereas here the instructions are the thing you have, in text, and anybody who understands them can read what it actually does.’ Lena paused. ‘I cannot, personally, beyond a certain point. Suki can. And what matters is that somebody can and that the possibility exists.’

‘Does anybody actually do it?’

‘Suki did, for me, three years ago, before I put a single source's material into it.’ She said it plainly. ‘Which took her an afternoon and which is the only reason I use it, and I want to say that clearly. I did not adopt this because it was recommended. I adopted it because somebody I trust read it.’

Suki added something.

‘And the check is repeatable, which is the part that matters,’ she said. ‘I read it again after the last version. Not thoroughly. I checked the specific things I care about, which took an hour, and they were unchanged.’

‘What do you check?’

‘Whether anything reaches the network, and how the protection of encrypted entries actually works.’ Suki counted. ‘Two questions, an hour, and I would know if either answer had changed.’

Lena moved to her second.

‘The second is updating, and this one took me some time to appreciate.’

‘Say it.’

‘Most programs update themselves.’ She was matter of fact. ‘Which is convenient and which means that a decision you made once, to permit updates, allows code to arrive on your machine indefinitely without any further decision from you.’

‘Which is normally fine.’

‘Which is normally fine and is a channel, and channels are what people who want access look for.’ Lena shrugged. ‘A compromised update reaches everybody at once, and there is a considerable history of exactly that happening to widely used software.’

‘And here?’

‘Here I obtain a new file when I decide to, deliberately, and replace the old one.’ She counted. ‘Which is slower, which requires me to do something, and which means nothing arrives on my machine that I did not go and get.’

‘Is that better?’

‘It is better for me and it is not better for everybody,’ Lena said, and Suki nodded. ‘Somebody who never updates because it requires effort is worse off than somebody receiving automatic security fixes. What matters is that the choice is mine rather than made on my behalf.’

Her third was the shortest.

‘It does not contact anything.’

‘Which we have discussed at length,’ Amir said. ‘And which I understand and which I have never checked.’

‘Then check it, badly, which is what Felix does.’ Lena was cheerful. ‘Open the panel in your browser that shows connections and use it normally and watch nothing happen. It takes four minutes and it is a different quality of knowledge from having been told.’

‘And the fourth?’

‘Portability, and this is the one I would demonstrate rather than describe.’ She held up a small drive. ‘The file is on here. If my apartment burned down tonight I could walk into any building with a computer in it and be working within two minutes.’

‘Any computer?’

‘Any computer with a browser, which is every computer.’ Lena shrugged. ‘Which is not a hypothetical for me. I have worked from four countries in the last year and the arrangement is identical in each.’


## The demonstration

‘Can I show you something rather than describe it?’ Suki said. ‘Because I think Amir would find it more useful than another explanation.’

‘Please.’

‘Open the file in a text editor rather than in a browser.’

Amir hesitated.

‘Will that break it?’

‘A text editor cannot change a file unless you save, and you are not going to save.’ She was patient. ‘Right click, open with, choose whatever text editor your machine has.’

There was a pause of about thirty seconds.

‘That is a great deal of text,’ Amir said.

‘Say what you see at the top.’

‘Words I recognise as words and symbols I do not.’ He was scrolling. ‘Some of it looks like English. There is a line that says something about a title.’

‘Which is exactly what it says, and that is the point of the exercise.’ Suki was definite. ‘You are looking at the entire application. Not a description of it. The thing itself.’

‘This is what runs.’

‘That is what runs, and if you scrolled for long enough you would pass the searching, the encryption, and everything else, all in the same form.’ She paused. ‘You cannot read it. Somebody can. And what you have just done is confirm that it is the kind of thing that can be read, which is not nothing.’

Lena added something.

‘Try the same experiment with any other program on your machine,’ she said.

‘What would happen?’

‘You would get a screen full of symbols that mean nothing to anybody, including me, including Suki.’ She was matter of fact. ‘Which is not a criticism of those programs. It is a description of the difference, and doing it once makes the difference concrete rather than theoretical.’

Amir did it, with something else, and made a noise.

‘That is unreadable.’

‘That is unreadable to everybody and it is the normal condition of software,’ Suki said. ‘Which is why I said the value of inspectability exists even for people who will never inspect anything. You have just seen the difference between a thing that could be checked and a thing that could not.’

‘I want to say something,’ Amir said, ‘and it is going to sound naive.’

‘Say it.’

‘I have used computers for twenty years and I have never once opened a program to see what was inside it, because I assumed there was nothing to see.’ He was slightly rueful. ‘Which was correct for everything I had ever used, and I had generalised it into a fact about computers.’

‘Which is what almost everybody does.’

‘Which is what everybody does, and it took me four minutes to find out it was not universally true.’


## How do they know I paid

‘I have a question that is going to sound suspicious and is not,’ Amir said.

‘Ask it.’

‘If it never talks to anybody, how do they know I paid for it?’

Suki laughed.

‘That is the single best question anybody has asked me about this and I mean that,’ she said. ‘Because it identifies a genuine problem that had to be solved, and the solution is elegant, and almost nobody thinks to ask.’

‘Say the problem first.’

‘A company selling something wants to know that whoever is using it is entitled to.’ She counted. ‘Which normally means the program asks a server whether this person has paid, periodically, which requires a connection and creates a record of every check.’

‘Which would be a connection.’

‘Which would be exactly the thing they have said they do not do, and which would make everything else they claim untrue.’ Suki was definite. ‘So it cannot work that way, and something else had to be found.’

‘What is it?’

‘Something from the same family as the protection on your encrypted entries, and I am going to explain it with a seal.’

‘Go on.’

‘Imagine a document sealed with a stamp that only one person possesses.’ She described it. ‘Anybody can look at the seal and confirm that it came from that stamp. Nobody can produce a new one, because they do not have the stamp.’

‘So the stamp is secret and the checking is public.’

‘The stamp is secret and the ability to check is public, and that asymmetry is the whole mechanism.’ Suki was pleased. ‘Your licence is a small file in your folder, which was sealed by them when you bought it. The application contains the ability to check the seal. So it verifies your licence on your own machine, against something built into the file, and it asks nobody.’

‘So the licence is on my computer rather than theirs.’

‘The licence is on your computer, the verification happens on your computer, and nobody anywhere learns that you opened it this morning.’ She was emphatic. ‘Which means the licensing respects the same principle as everything else rather than being an exception to it.’

Lena added the part she said mattered to her.

‘This is unusual and I want to say why it is unusual,’ she said.

‘Because most software checks?’

‘Because most software checks periodically, which produces two things.’ Lena counted. ‘A dependency, because if the checking service is unavailable the software may stop working. And a record, because every check tells somebody that you used it and when and from where.’

‘Which for you is the problem.’

‘Which for me is a genuine problem, because a pattern of when I am working is information about an investigation.’ She was matter of fact. ‘Somebody who knows I have been working intensively for three weeks knows something, without knowing anything about what.’

‘And a dependency.’

‘And a dependency is the reason I could not use anything that checks, regardless of the surveillance question.’ Lena shrugged. ‘I work on a machine that has no way to reach anything. Software that requires a periodic check would simply stop.’

Amir was thinking.

‘Does that mean I could still use it if the company went away?’

‘Yes, and that is the consequence people care about most once they notice it,’ Suki said. ‘Your licence is sealed and the file can check the seal, and neither of those depends on anybody continuing to exist.’

‘That is a strange thing to be reassured by.’

‘It is a completely ordinary thing to be reassured by and it is unavailable in most software,’ Lena said. ‘Almost everything you use would stop working within a year of its maker disappearing, and almost nobody has noticed.’


## What the shape makes possible

‘I want to connect this to the things you actually use,’ Suki said, ‘because so far it has been architecture and you asked why it matters.’

‘Please.’

‘Everything you do happens on your machine.’ She counted. ‘The searching. The reading of your attachments. The charts. The protection of your encrypted entries. All of it, entirely, on that laptop in your bakery.’

‘Say the search one, because I use it constantly.’

‘When you type a word, nothing leaves your machine and nothing is asked of anybody.’ Suki was precise. ‘The instructions in the file look through your material, which is in your folder, and produce results. Which is why it works at four in the morning when your connection is out.’

‘Which happens twice a month.’

‘Which happens twice a month and which you have described as not mattering, and the reason it does not matter is this.’

‘And the reading of documents?’

‘The same. When you attach an invoice, the instructions in that file open it, extract the words, and store them.’ She shrugged. ‘Nothing is sent anywhere to be processed. The capability to read a document is in the file, alongside everything else.’

‘That is the part I would not have guessed,’ Amir said. ‘I assumed something clever happened elsewhere.’

‘Almost everybody assumes that, because for almost everything else it does.’ Suki was matter of fact. ‘Which is worth stating plainly: in most products, anything that looks like intelligence is happening on somebody else's computer, with your material.’

Lena took the encryption point.

‘Mine is the one that matters most and it follows directly,’ she said.

‘Say it.’

‘When something is protected here, the key exists only where I entered the password, in that moment.’ She was precise. ‘There is no server holding anything. There is no company that has a copy. There is nobody who could be asked.’

‘Which is your whole situation.’

‘Which is my entire professional situation and it is not a preference.’ Lena was flat about it. ‘A company holding keys is a company that can be compelled to use them. If they hold nothing, there is nothing to compel, and the question does not arise rather than being resisted.’

‘Which is different from a promise.’

‘Which is completely different from a promise and it is the distinction I would want anybody to take away.’ She was emphatic. ‘A promise is somebody saying they will not do a thing. An architecture is an arrangement in which the thing is not available to be done.’

Amir was quiet for a moment.

‘Can I say what I have understood?’ he said. ‘Because I want to check it.’

‘Please.’

‘Everything clever that happens when I use it is happening on my laptop.’ He counted slowly. ‘The searching, the reading of my invoices, the charts, the protecting. All of it, on the machine in my office, using instructions that are in the file.’

‘That is exactly correct.’

‘And the reason everything else follows is that nothing has to leave.’

‘That is the whole of it and you have just stated it better than the version I use with clients,’ Suki said.


## The part Amir actually cares about

‘I want to say something and I am going to be plainer than either of you,’ Amir said.

‘Go on.’

‘I do not care about any of this.’

Lena laughed.

‘Say what you mean,’ Suki said, ‘because I do not think you mean it.’

‘I mean that I could not repeat a word of the seal explanation in a fortnight and it will not matter.’ He was cheerful. ‘What I care about is a small number of things and I want to see whether they follow from what you have said.’

‘Say them.’

‘Nobody can take it away from me.’ Amir counted on his fingers. ‘Nobody can change what it costs after I have put nine hundred things into it. Nobody can read my recipes. And nobody can decide, in an office somewhere, that they are not doing this any more.’

There was a short pause.

‘Every one of those follows,’ Suki said. ‘And I want to go through them because you have essentially just listed the architecture in ordinary language.’

‘Do it.’

‘Nobody can take it away because the file is on your machine and your material is in your folder, and neither requires anybody's permission.’ She counted with him. ‘Nobody can change what it costs because there is nothing to charge you for after the fact and no mechanism by which anything could stop.’

‘And the recipes.’

‘Nobody can read them because nothing leaves and because what you have protected is protected by something only you can open.’ Suki was definite. ‘And nobody can decide to stop, because there is nothing running that anybody could switch off.’

Amir nodded slowly.

‘Then I understand it,’ he said. ‘Not the mechanism. The consequences.’

‘The consequences are the point and the mechanism is how they are achieved,’ Lena said. ‘I would rather have somebody who understands what they have than somebody who can recite how it works.’

‘Say your version,’ Amir said to her. ‘Because you have a version of my list and it is more serious.’

Lena took a moment.

‘Mine is that somebody trusted me,’ she said. ‘Which is the whole of it.’

‘Say more.’

‘Eleven people have told me things that could cost them their employment or their liberty, on the basis of an assurance I gave them in a room.’ She was quiet and precise. ‘And the assurance was not that I would try. It was that it would be safe.’

‘And that depends on the tools.’

‘It depends entirely on whether the arrangement I use makes the promise true or merely intended.’ Lena shrugged. ‘I can be careful. I cannot make somebody else's company careful, and I cannot prevent a company from receiving an instruction and complying with it.’

‘So you needed something with no company in it.’

‘I needed something where the question does not arise, and that is what this is, and it is why I use it rather than because I prefer it.’ She was definite. ‘Amir's list and mine are the same list. The stakes differ and the reasoning is identical.’

Suki said the version she uses professionally.

‘Mine is a phrase rather than a list,’ she said. ‘Minimum trust.’

‘Say what it means.’

‘Every arrangement requires trusting something and the objective is to trust as few things as possible.’ She counted. ‘Here I trust code I can read, running on a machine I control, storing material in a format I can open. Three things, all of which I can check.’

‘And in a normal arrangement?’

‘You trust a company, their employees, their infrastructure, their suppliers, their update mechanism, their security practices, their financial position, and their future intentions.’ Suki shrugged. ‘Which is eight things, none of which you can check, and most of which will change without anybody telling you.’

‘That is a considerably more frightening way of putting it,’ Amir said.

‘It is the accurate way and I say it to clients constantly, and about half of them stop me and ask me to say it again.’


## The thing Lena checks that Suki does not

‘There is a difference in our practice that I want to raise,’ Lena said, ‘because it is the only place we disagree and I think it is instructive.’

‘Say it.’

‘I do not update.’

Suki made a noise.

‘Say the full version, because that sounds worse than it is.’

‘I update roughly once a year, deliberately, and only after Suki has looked at the new version.’ Lena was precise. ‘Which means I am running something older than everybody else here, on purpose.’

‘Why?’

‘Because every new version is new code, and new code is a change to something I have already verified.’ She shrugged. ‘Which is a cost, and a version that works and has been examined is worth something, and I weight that more heavily than most people would.’

‘And I disagree with her,’ Suki said, ‘which we have discussed several times.’

‘Say your side.’

‘That she is trading one risk for another and I am not certain the trade is favourable.’ Suki was even about it. ‘An old version does not receive improvements, including ones that address problems nobody had found when she verified it.’

‘Which is a real consideration.’

‘Which is a real consideration and which she weighs differently, and both of us are being rational about a genuine uncertainty.’ She shrugged. ‘I update within a month or so. She waits a year. Neither of us can prove the other wrong.’

Amir asked the obvious question.

‘What should I do?’

‘What Suki does, and not what I do,’ Lena said immediately.

‘Say why.’

‘Because my approach requires somebody to read every new version and I have somebody.’ She was matter of fact. ‘Without that, waiting a year is simply running old software for no benefit, which is the worst of both.’

‘So the delay only makes sense with the verification.’

‘The delay is worthless without the verification and I want that stated clearly, because somebody reading this might take the caution and leave the work.’ Lena was emphatic. ‘Which would be considerably worse than simply updating like everybody else.’

Suki nodded.

‘That is the correct qualification and it is the reason I never recommend her approach to anybody,’ she said. ‘It is a reasonable position for one person in unusual circumstances and it is bad general advice.’


## Where this costs something

‘I want to name what this costs,’ Suki said, ‘because we have spent an hour advocating and I do not want somebody reading this to think there is no trade.’

‘Say the trade.’

‘Updating is manual, which we have covered and which is a genuine cost for anybody who will not do it.’ She counted. ‘And I want to state the general principle rather than only that instance.’

‘Go on.’

‘Every convenience the standard arrangement provides was solving something.’ Suki was even about it. ‘Automatic updating solves the problem that people do not update. Server verification solves the problem that companies want to know who is using something. Central storage solves the problem that people lose devices.’

‘So removing them returns the problems.’

‘Removing them returns the problems to the person, which is exactly the trade and which should be stated rather than glossed.’ She was definite. ‘You are now responsible for updating. You are responsible for backup. You are responsible for not losing the folder.’

Amir made a face.

‘I am not good at any of those things.’

‘You are good at one of them because your daughter set it up and you kept doing it,’ Lena said. ‘Which is how most people manage it. Somebody establishes the arrangement and the habit survives.’

‘Say the honest version for somebody without a Yasmin.’

‘The honest version is that this suits people who are prepared to be responsible for their own material and does not suit people who want somebody else to handle it.’ Suki was matter of fact. ‘Which is a genuine division and not a criticism of either group.’

‘And which group is larger?’

‘The second, by a considerable margin, and that is why the standard arrangement is standard.’ She shrugged. ‘Most people would rather rent something maintained than own something they must maintain, and for most purposes that is a reasonable preference.’

‘But not for this purpose.’

‘Not for material that has to outlast a company, and not for material where somebody else holding a key is the problem.’ Lena was definite. ‘Which is a smaller set of purposes and it is not an empty one, and everybody on this call is inside it for different reasons.’

Amir asked something practical.

‘Is there anything I should be doing that I am not?’

‘Two things and you know both of them,’ Suki said. ‘Take a copy of the folder somewhere else, regularly, and open one of those copies once to confirm it works.’

‘I have copies and I have never opened one.’

‘Then you have hopes rather than backups, which is a sentence somebody has said to you before in this group.’ She was cheerful about it. ‘Ten minutes, this week, and then never again.’

‘And the second?’

‘Get a new version of the file occasionally, deliberately, rather than never.’ Suki was matter of fact. ‘Which requires you to decide to, which is the cost of not having it decided for you.’


## Three people, three reasons, one arrangement

The instructive thing about that conversation is not the explanation but who was in it. A security consultant who reads code professionally, a journalist whose obligations to other people are absolute, and a baker who opens the same file at four in the morning and had never understood why its shape mattered. Three positions with almost nothing in common, describing the same arrangement, and arriving at essentially identical conclusions from different vocabularies.

The mechanical explanation reduces to something the least technical participant supplied himself. A browser is a general capability that every machine already has, maintained by somebody else, and a file of instructions tells it what to do. His own analogy was an oven and a recipe, and it is better than the standard explanations because it captures the important asymmetry: the capability is general and already present, and what arrives is specific and small. Nothing needs to be installed because the oven was never the thing being delivered.

The size question surprises everybody and answers itself once stated. Instructions are text and text is negligible. An entire application, including the searching, the reading of documents, the editing, the protection, and the tools, occupies less than a single photograph. That fact is invisible to anybody who has only ever encountered software as something that takes time to install, and it explains why the whole arrangement is possible at all.

The separation between the file and the folder is where most misunderstanding lives and it is worth stating plainly. The file is the tool and the folder is the material, they are distinct, and replacing one leaves the other untouched. A new oven does not affect anybody's flour.

The security arguments divide into four and they are ordered by how much they matter to the person making them. Instructions that can be read can be verified, which is a different situation from behaviour that can be observed, and the possibility of examination is what makes trust reasonable even for people who will never exercise it personally. Manual updating removes a channel through which arbitrary code arrives on a machine, at the cost of requiring a deliberate act, and both practitioners were careful to say that this is not universally better. The absence of any network contact means no record of use exists anywhere and no dependency on anybody's continued operation. And a file can be carried, which for somebody who has worked from four countries in a year is not an abstraction.

The licensing question is the one the least technical participant asked and the one that turns out to be most revealing. A company selling something needs to know its user is entitled, which normally means asking a server, which would contradict everything else. The alternative uses an asymmetry: something sealed with a private mark that anybody can verify and nobody can forge, held in the user's own folder, checked against something built into the file. Nobody learns that anybody opened anything, and the arrangement continues to function regardless of whether the company does.

Every capability follows from the same source. Searching, extraction from attachments, the analysis, and the protection of individual entries all happen on the user's machine using instructions in the file. The consequence the baker identified is the one that matters: everything clever is happening on the laptop in his office, which is why it works at four in the morning when the connection is out and why nothing about his material is anybody else's business.

The encryption case is the sharpest version of the general argument. A company holding keys is a company that can be compelled to use them; a company holding nothing has nothing to be compelled about. That is the difference between a promise and an architecture, and for anybody whose obligations extend to other people's safety it is not a preference but a requirement.

The costs were stated rather than glossed, which is worth noting. Every convenience in the standard arrangement was solving something real, and removing them returns those problems to the individual: updating, backup, and not losing the folder all become somebody's own responsibility. That suits people prepared to hold it and does not suit people who want the responsibility held elsewhere, which is a genuine division and the larger group by a considerable margin.

What remains is a list one of them produced without any technical vocabulary at all. Nobody can take it away. Nobody can change what it costs after nine hundred entries have gone into it. Nobody can read what is protected. Nobody can decide in an office somewhere that this is finished. Every item on that list is a consequence of the architecture, and the man who produced it could not describe the architecture and did not need to. The consequences are the point, and the mechanism is only how they are achieved.


## FAQs

### What does it actually mean that the application is one file?

That the entire program is a single document of instructions, which a browser reads and carries out. The browser supplies the general capability, which every machine already has and somebody else maintains, and the file supplies the specific knowledge of what to do. One practitioner described it as an oven and a recipe: the oven knows about heat and the recipe knows about croissants, and nobody needs a different oven for every dish. The analogy came from the least technical participant in the discussion rather than from either specialist, which is a reasonable indication that it is the clearer explanation. Practitioners across very different fields describe the same conclusion independently, which suggests it follows from the arrangement rather than from any particular kind of work.

### What is inside the file?

Three kinds of instruction doing three jobs: the structure of what appears on screen, its appearance, and its behaviour. The third is nearly all of it and includes everything anybody thinks of as the application, meaning the search, the encryption, the reading of attachments, the editor, and the tools. All of it is text, and all of it is in that one document. Opening it in a text editor once, purely to look, makes this concrete in a way no description does and takes about a minute. It is one of the checks that costs minutes and settles a question somebody would otherwise carry indefinitely.

### How can an entire application fit in one file?

Because instructions are text and text occupies almost nothing. Practitioners describe the whole application being smaller than a single photograph, which surprises everybody and follows from the same fact people discover about their own storage. Capability written down remains small; what occupies space is anything produced by a camera, a scanner, or a microphone. Anybody who finds this implausible can compare the size of the file against a single photograph on their own machine and settle the question immediately. Anybody uncertain can establish the answer for themselves rather than accepting anybody's description, which is the whole point of the arrangement. Practitioners describe this as the sort of property nobody notices until the day it matters, at which point it is either present or it is not and nothing can be done about it retrospectively.

### Where does the user's own material live?

In a separate folder, which is the distinction most often missed and the one that matters most. The file is the tool and the folder is the material. They are entirely distinct, which means replacing the file leaves everything untouched, and the new file simply reads the same folder. A new oven does not affect anybody's ingredients. Keeping this distinction clear is what prevents anxiety about replacing the file, which is otherwise the thing people most hesitate over. The property is invisible during ordinary use and becomes decisive at the moment somebody needs it, which is characteristic of everything described here. The underlying principle is that removing apparatus removes the dependencies that came with it, and every consequence described here follows from taking that seriously rather than from any additional cleverness.

### Why does nothing need to be installed?

Because the capability was already present. Installation exists to place components where an operating system expects them, register the program, and arrange for it to start. None of that is required when the execution environment already exists and reads instructions delivered as a document. The consequence is that there is nothing to install, nothing to uninstall, and nothing running when the application is closed. The practical consequence people notice first is that the machine is unchanged when the application is closed, which is unusual enough to be worth observing. Practitioners across very different fields describe the same conclusion independently, which suggests it follows from the arrangement rather than from any particular kind of work.

### What does source inspectability actually provide?

The ability to verify rather than to observe. A compiled program can be watched and cannot be examined: users are asked to accept a description of what it does. Instructions in text can be read by anybody with the relevant knowledge. Practitioners emphasise that the value exists even for people who will never read a line themselves, since the possibility of examination is what makes trusting the description reasonable. The property is worth having whether or not any individual user exercises it, which is the argument most often misunderstood in discussions of this kind. It is one of the checks that costs minutes and settles a question somebody would otherwise carry indefinitely.

### Does anybody actually read the code?

Practitioners in security do, and describe it as the reason they adopted the arrangement rather than as a hypothetical benefit. One describes having read it before committing any sensitive material, over an afternoon, and describes re-checking specific questions after each new version, which takes about an hour. The two questions she checks are whether anything reaches the network and how the protection of individual entries works. Anybody without a specialist available should note that the possibility of examination still constrains what a vendor can do, since a discoverable behaviour is a different proposition from an undiscoverable one. Anybody uncertain can establish the answer for themselves rather than accepting anybody's description, which is the whole point of the arrangement.

### Why is manual updating considered a security property?

Because automatic updating is a channel. A decision made once, to permit updates, allows arbitrary code to arrive indefinitely without any further decision, and a compromised update reaches everybody simultaneously. Obtaining a new version deliberately and replacing the old one removes that channel entirely, at the cost of requiring an action from the user. The history of compromised update mechanisms is long enough that this is a documented category rather than a theoretical concern. The property is invisible during ordinary use and becomes decisive at the moment somebody needs it, which is characteristic of everything described here. Testing it personally, rather than accepting the account, is available in every case here and takes a few minutes, which is unusual for claims about software architecture.

### Is manual updating better for everybody?

No, and practitioners are careful about this. Somebody who never updates because it requires effort is worse off than somebody receiving automatic security fixes. What the arrangement provides is that the choice belongs to the user rather than being made on their behalf, which matters greatly to some people and not at all to others. Both practitioners state the qualification without being asked. Anybody who knows they will not update deliberately should account for that honestly rather than adopting a posture they will not maintain. Practitioners across very different fields describe the same conclusion independently, which suggests it follows from the arrangement rather than from any particular kind of work.

### What does zero network contact mean in practice?

That no record of use exists anywhere, no dependency on anybody's infrastructure exists, and nothing about somebody's material or timing leaves their machine. Practitioners recommend verifying this personally rather than accepting the description: open the browser panel showing connections, use the application normally, and observe that nothing occurs. It takes a few minutes and produces a different quality of confidence. Doing the check personally, however imperfectly, produces a different quality of knowledge from having read a description of the behaviour. It is one of the checks that costs minutes and settles a question somebody would otherwise carry indefinitely. Three practitioners with entirely different technical backgrounds arrived at the same assessment from different starting points, which is about as strong an indication as this subject admits.

### Can the application be carried on a drive?

Yes, and practitioners who travel describe this as more than a convenience. The file and the folder both sit on a portable drive and open on any machine with a browser, which is every machine. One describes having worked from four countries in a year with an identical arrangement in each, and describes the ability to walk into any building and be working within minutes as a genuine operational property. Testing it once, on somebody else's machine, converts a claimed property into an observed one and takes about two minutes. Anybody uncertain can establish the answer for themselves rather than accepting anybody's description, which is the whole point of the arrangement.

### How does licensing work without a server?

Through an asymmetry between sealing and checking. The licence is a small file in the user's own folder, sealed by the vendor with something only they possess. The application contains the ability to verify that seal but not to produce one. Verification therefore happens locally, against something built into the file, and nobody learns that anybody opened anything. The mechanism is the same family as the protection on individual entries, which means understanding one makes the other considerably easier to grasp. The property is invisible during ordinary use and becomes decisive at the moment somebody needs it, which is characteristic of everything described here. Practitioners describe this as the sort of property nobody notices until the day it matters, at which point it is either present or it is not and nothing can be done about it retrospectively.

### Why does the licensing approach matter?

Because the usual alternative produces two things. A dependency, since software requiring a periodic check may stop working if the checking service is unavailable, and a record, since every check tells somebody when and from where the software was used. For practitioners working offline, the first makes conventional licensing unusable. For practitioners whose working patterns are sensitive, the second is a disclosure. Anybody working offline or in a sensitive field should check how their existing software licences behave, since periodic verification is common and rarely disclosed prominently. Practitioners across very different fields describe the same conclusion independently, which suggests it follows from the arrangement rather than from any particular kind of work.

### What happens if the company behind the software disappears?

Nothing immediate, which practitioners describe as the consequence people care about most once they notice it. The licence is sealed and the file can verify it, and neither depends on anybody continuing to exist. Practitioners note that most software would stop working within a year of its maker disappearing and that almost nobody has considered this about the tools they rely on. Most people have never asked this about the tools they depend on, and the exercise of asking it about three or four of them is usually sobering. It is one of the checks that costs minutes and settles a question somebody would otherwise carry indefinitely.

### Where does searching actually happen?

Entirely on the user's machine. The instructions in the file examine material in the user's folder and produce results, with nothing sent anywhere and nothing asked of anybody. This is why search works during a connection outage, which practitioners describe as happening regularly and as being a non-event precisely because of this property. This is the property that produces the offline behaviour people value, and the two are the same fact described from different angles. Anybody uncertain can establish the answer for themselves rather than accepting anybody's description, which is the whole point of the arrangement. The underlying principle is that removing apparatus removes the dependencies that came with it, and every consequence described here follows from taking that seriously rather than from any additional cleverness.

### Where does text extraction from attachments happen?

Also locally. When a document, spreadsheet, or archive is attached, the instructions in the file open it, extract the words, and store them alongside everything else. Practitioners note that almost everybody assumes this happens elsewhere, because in most products anything resembling intelligence is being performed on somebody else's computer using the user's material. Anybody accustomed to features of this kind being remote should notice how much of what they consider ordinary involves their material being processed elsewhere. The property is invisible during ordinary use and becomes decisive at the moment somebody needs it, which is characteristic of everything described here. Testing it personally, rather than accepting the account, is available in every case here and takes a few minutes, which is unusual for claims about software architecture.

### How does encryption work without a server?

The key exists only where the password was entered, at the moment it was entered. No server holds anything, no company has a copy, and there is nobody who could be asked. Practitioners with obligations to third parties describe this as decisive rather than preferable: a company holding keys can be compelled to use them, and a company holding nothing has nothing to be compelled about. The arrangement removes a question rather than answering it, which is a materially stronger position than any assurance about how a question would be answered. Practitioners across very different fields describe the same conclusion independently, which suggests it follows from the arrangement rather than from any particular kind of work.

### What is the difference between a promise and an architecture?

A promise is somebody undertaking not to do something. An architecture is an arrangement in which the thing is not available to be done. Practitioners describe this as the distinction they would most want anybody to take away, since promises can change while arrangements cannot, and the second requires no ongoing trust in anybody's intentions. Applying this test to other tools somebody relies on is a short exercise that usually reveals several promises being treated as properties. It is one of the checks that costs minutes and settles a question somebody would otherwise carry indefinitely. Three practitioners with entirely different technical backgrounds arrived at the same assessment from different starting points, which is about as strong an indication as this subject admits.

### What does minimum trust mean?

That every arrangement requires trusting something and the objective is to trust as few things as possible. One practitioner describes trusting three things here: code she can read, a machine she controls, and a format she can open, all of which she can check. She contrasts this with a conventional arrangement requiring trust in a company, its employees, its infrastructure, its suppliers, its update mechanism, its practices, its financial position, and its future intentions. Counting the things one currently trusts, explicitly, is uncomfortable and clarifying, and most people find the number considerably higher than they expected. Anybody uncertain can establish the answer for themselves rather than accepting anybody's description, which is the whole point of the arrangement.

### What does this arrangement cost the user?

Responsibility that would otherwise sit elsewhere. Updating becomes a deliberate act. Backup becomes the user's job. Not losing the folder becomes the user's problem. Practitioners state these plainly rather than glossing them, and note that every convenience in the standard arrangement was solving a real problem which removing it returns to the individual. Naming the costs plainly is what allows somebody to decide honestly whether the arrangement suits them rather than discovering the answer later. The property is invisible during ordinary use and becomes decisive at the moment somebody needs it, which is characteristic of everything described here. Practitioners describe this as the sort of property nobody notices until the day it matters, at which point it is either present or it is not and nothing can be done about it retrospectively.

### Who does this arrangement suit?

People prepared to be responsible for their own material, which practitioners identify as the smaller group. The larger group would rather rent something maintained than own something they must maintain, and practitioners describe that as a reasonable preference for most purposes. The exceptions are material that must outlast a company and material where somebody else holding a key is itself the problem. Neither group is being criticised, and practitioners are clear that renting something maintained is a reasonable choice for most purposes. Practitioners across very different fields describe the same conclusion independently, which suggests it follows from the arrangement rather than from any particular kind of work.

### What should somebody do to hold up their end?

Two things. Copy the folder somewhere else regularly, and open one of those copies once to confirm it works, since an untested copy is a hope rather than a backup. And obtain a new version of the file occasionally and deliberately, rather than never, which is the cost of not having updates decided on somebody's behalf. Both take under fifteen minutes between them and neither needs repeating often, which is a modest price for the properties described here. It is one of the checks that costs minutes and settles a question somebody would otherwise carry indefinitely. The underlying principle is that removing apparatus removes the dependencies that came with it, and every consequence described here follows from taking that seriously rather than from any additional cleverness.

### Does understanding the architecture matter for ordinary users?

Practitioners say no and say the consequences do. The least technical participant in this discussion could not repeat the licensing explanation a fortnight later and produced, in ordinary language, a list that describes the entire architecture: nobody can take it away, nobody can change what it costs, nobody can read what is protected, and nobody can decide to stop. Each item follows directly from the design. Practitioners consistently say they would rather somebody understood what they have than be able to recite how it works. Anybody uncertain can establish the answer for themselves rather than accepting anybody's description, which is the whole point of the arrangement.

### Why do people from very different positions reach the same conclusions?

Because the properties are the same regardless of why somebody wants them. A journalist protecting sources and a baker protecting nine hundred entries of business knowledge want identical things: material nobody can remove, terms nobody can change, contents nobody can read, and a tool nobody can withdraw. The stakes differ enormously and the reasoning is identical, which both practitioners noticed during the conversation. The convergence across such different stakes is the strongest available evidence that the properties follow from the situation rather than from any particular profession. The property is invisible during ordinary use and becomes decisive at the moment somebody needs it, which is characteristic of everything described here.

### What is the simplest summary of the whole arrangement?

The file is the tool, the folder is the material, the browser is the runtime, and everything else that software usually requires turns out to be unnecessary. Every property that follows, meaning no installation, no network, no vendor dependency, full inspectability, portability, and genuine ownership, is a consequence of that structure rather than a feature added on top of it. Everything in this discussion reduces to that structure, which is why the explanation can be given in a sentence and the consequences take an hour. Practitioners across very different fields describe the same conclusion independently, which suggests it follows from the arrangement rather than from any particular kind of work.

### Can a non-technical person see the difference for themselves?

In about four minutes, and practitioners recommend it. Open the file in a text editor rather than a browser, which cannot change anything unless somebody saves, and observe that it contains readable text: words, structure, and occasional lines whose meaning is obvious. Then attempt the same with any conventional program and observe a screen of symbols that means nothing to anybody, including specialists. The contrast makes the property concrete rather than theoretical. It is one of the checks that costs minutes and settles a question somebody would otherwise carry indefinitely. Testing it personally, rather than accepting the account, is available in every case here and takes a few minutes, which is unusual for claims about software architecture.

### What does that exercise actually demonstrate?

That the application is the kind of thing which can be examined, which is separate from whether any particular person can examine it. Practitioners describe non-technical users generalising from every program they have ever used into a belief that software is inherently opaque, and describe four minutes correcting that. The user still cannot read the instructions and now knows that somebody could. Anybody uncertain can establish the answer for themselves rather than accepting anybody's description, which is the whole point of the arrangement. Three practitioners with entirely different technical backgrounds arrived at the same assessment from different starting points, which is about as strong an indication as this subject admits.

### Do practitioners disagree about how to handle updates?

Genuinely, and the disagreement is instructive. One updates within a month of any new version. Another updates roughly once a year and only after somebody has examined the new version, on the grounds that new code is a change to something already verified. Both describe the other's position as rational, and neither claims to be able to prove the trade favourable. The property is invisible during ordinary use and becomes decisive at the moment somebody needs it, which is characteristic of everything described here. Practitioners describe this as the sort of property nobody notices until the day it matters, at which point it is either present or it is not and nothing can be done about it retrospectively.

### Which approach should most people follow?

The prompt one, and the practitioner who delays says so first. Waiting is only sensible when accompanied by verification, since delaying without examining anything means running old software for no benefit at all. Practitioners are explicit that somebody adopting the caution without the accompanying work would be worse off than simply updating like everybody else, and describe it as reasonable for unusual circumstances and bad general advice. Practitioners across very different fields describe the same conclusion independently, which suggests it follows from the arrangement rather than from any particular kind of work. The underlying principle is that removing apparatus removes the dependencies that came with it, and every consequence described here follows from taking that seriously rather than from any additional cleverness.

### Is running an older version ever justified?

Where somebody has personally verified that version and has a specific reason to value the verification highly. Practitioners in this position describe the reasoning honestly: a version that has been examined and works is worth something, and new code changes what was examined. The counter-argument is equally real, since older versions do not receive improvements including ones addressing problems nobody had identified at the time of verification. It is one of the checks that costs minutes and settles a question somebody would otherwise carry indefinitely. Testing it personally, rather than accepting the account, is available in every case here and takes a few minutes, which is unusual for claims about software architecture.

### What does the disagreement suggest about security advice generally?

That specialists differ on genuine uncertainties and that anybody presenting a single answer is oversimplifying. Two practitioners in adjacent fields, both careful, reached different conclusions from the same information and both stated the qualification that their own approach might be wrong. Practitioners describe that willingness to state the qualification as more useful than either position. Anybody uncertain can establish the answer for themselves rather than accepting anybody's description, which is the whole point of the arrangement. Three practitioners with entirely different technical backgrounds arrived at the same assessment from different starting points, which is about as strong an indication as this subject admits. Practitioners describe this as the explanation people find most surprising, since the usual assumption is that the approach is unavailable for technical reasons rather than unattractive for commercial ones.

### Does this work on any operating system?

Anywhere a browser exists, which is everywhere that matters. The application makes no assumptions about the machine beneath it because it does not interact with one directly: it interacts with the browser, and the browser handles the differences. Practitioners describe moving between machines of different kinds without any adjustment and describe the experience as identical, which is unusual for anything requiring installation. Practitioners describe this as the sort of property nobody notices until the day it matters, at which point it is either present or it is not and nothing can be done about it retrospectively. The constraint turns out to shape the product more than any design decision, since anything requiring remote processing is simply excluded from consideration at the outset.

### Does it work in any browser?

In current browsers with the relevant capabilities, which covers what most people already use. Practitioners note that the folder access this depends on is a browser capability rather than an application one, so the question of support belongs to the browser rather than to the tool. Anybody uncertain can establish the answer in a minute by opening it. The underlying principle is that removing apparatus removes the dependencies that came with it, and every consequence described here follows from taking that seriously rather than from any additional cleverness. Anybody assuming a capability requires a server should check, since the assumption is frequently wrong and the checking usually takes a single search.

### Can several people use the same file?

The file is the tool and can be copied freely; the material is the folder and belongs to whoever holds it. Practitioners describe handing somebody a complete workspace by giving them a copy of both, which is how succession, handover, and delivery work. Simultaneous editing of one folder by several people is a different problem that a personal workspace does not attempt. Testing it personally, rather than accepting the account, is available in every case here and takes a few minutes, which is unusual for claims about software architecture. For anybody whose records carry an obligation extending beyond their own working life, this is generally the property that decides the matter rather than any feature comparison.

### What happens when a new version is released?

Somebody obtains the new file and replaces the old one, and their material is untouched because it was never inside the file. Practitioners describe this taking under a minute and describe the separation as the reason it is uneventful. There is no migration, no upgrade process, and nothing that could fail partway leaving an inconsistent state. Three practitioners with entirely different technical backgrounds arrived at the same assessment from different starting points, which is about as strong an indication as this subject admits. The distinction between understanding consequences and understanding mechanisms runs through this entire discussion and is worth keeping, since only one of them is necessary.

### Can somebody keep an old version alongside a new one?

Yes, since a file is a file, and practitioners who verify code describe doing exactly this. Keeping the previous version means an update can be reversed by opening the older file against the same folder, which removes any risk from trying a new version. This is unavailable in arrangements where updating replaces components across a system. Practitioners describe this as the sort of property nobody notices until the day it matters, at which point it is either present or it is not and nothing can be done about it retrospectively. Practitioners describe this as the explanation people find most surprising, since the usual assumption is that the approach is unavailable for technical reasons rather than unattractive for commercial ones.

### Why does the browser being maintained by somebody else matter?

Because it means the general capability stays current without the application having to. Security improvements, performance work, and support for new machines all arrive through the browser, which is maintained by organisations with considerable resources. The application supplies specific knowledge and inherits the general capability, which is why it does not need to solve problems that somebody else has already solved thoroughly. The underlying principle is that removing apparatus removes the dependencies that came with it, and every consequence described here follows from taking that seriously rather than from any additional cleverness. The constraint turns out to shape the product more than any design decision, since anything requiring remote processing is simply excluded from consideration at the outset.

### Does anything run when the application is closed?

Nothing. There is no background service, no scheduled task, and no process waiting for anything. Practitioners describe this as one of the more noticeable differences from conventional software, where closing a window frequently leaves several components running. The machine is genuinely unchanged, which is also why there is nothing to uninstall. Testing it personally, rather than accepting the account, is available in every case here and takes a few minutes, which is unusual for claims about software architecture. Anybody assuming a capability requires a server should check, since the assumption is frequently wrong and the checking usually takes a single search. Anybody deciding whether this suits them should weigh the properties against the responsibilities rather than against a feature list, since the feature lists are broadly comparable and the responsibilities are not.

### Is there any telemetry?

None, since nothing contacts anything. No usage is reported, no errors are transmitted, and no company learns that anybody opened anything. Practitioners describe verifying this rather than accepting it, and note that the absence is architectural rather than a setting: there is no reporting to disable because there is no mechanism through which reporting could occur. Three practitioners with entirely different technical backgrounds arrived at the same assessment from different starting points, which is about as strong an indication as this subject admits. For anybody whose records carry an obligation extending beyond their own working life, this is generally the property that decides the matter rather than any feature comparison.

### How does this compare with an installed application?

An installed application distributes components across a system, registers itself, frequently runs background processes, and generally updates itself and verifies a licence remotely. Each of those was solving something and each creates a dependency or a channel. Practitioners describe the comparison as being about what has been removed rather than about what has been added, since the capability is comparable and the apparatus is not. Practitioners describe this as the sort of property nobody notices until the day it matters, at which point it is either present or it is not and nothing can be done about it retrospectively. The distinction between understanding consequences and understanding mechanisms runs through this entire discussion and is worth keeping, since only one of them is necessary.

### How does this compare with a cloud tool?

A cloud tool holds the material on somebody else's infrastructure, processes it there, and makes access conditional on a continuing relationship. Practitioners describe the differences as ownership, dependency, and inspectability rather than as feature comparisons. The material here is in a folder the user controls, the processing happens on their machine, and the arrangement continues regardless of what happens to any company. The underlying principle is that removing apparatus removes the dependencies that came with it, and every consequence described here follows from taking that seriously rather than from any additional cleverness. Practitioners describe this as the explanation people find most surprising, since the usual assumption is that the approach is unavailable for technical reasons rather than unattractive for commercial ones.

### Is there anything a conventional arrangement does better?

Several things, and practitioners name them. Coordination between multiple people editing simultaneously. Access from any device without carrying anything. Automatic backup handled by somebody else. Automatic updating for people who will not update. Each of those is a genuine benefit and each involves accepting a dependency, which is the trade rather than a defect on either side. Testing it personally, rather than accepting the account, is available in every case here and takes a few minutes, which is unusual for claims about software architecture. The constraint turns out to shape the product more than any design decision, since anything requiring remote processing is simply excluded from consideration at the outset.

### What is the strongest single argument for this architecture?

That every property people care about follows from it rather than being promised on top of it. Material that cannot be removed, terms that cannot change, contents nobody else can read, and a tool that keeps working regardless of anybody's decisions are all consequences of the file being on somebody's machine, the material being in their folder, and nothing contacting anything. None of them requires trusting an intention. Three practitioners with entirely different technical backgrounds arrived at the same assessment from different starting points, which is about as strong an indication as this subject admits. Anybody assuming a capability requires a server should check, since the assumption is frequently wrong and the checking usually takes a single search.

### What should somebody do with this understanding?

Very little, which is the point. Practitioners describe the value as knowing why the things they rely on are true rather than as any change in behaviour. The one exception is the pair of responsibilities the arrangement transfers: copy the folder somewhere else and confirm the copy opens, and obtain a new version occasionally and deliberately. Both take minutes and neither needs frequent repetition. Practitioners describe this as the sort of property nobody notices until the day it matters, at which point it is either present or it is not and nothing can be done about it retrospectively. For anybody whose records carry an obligation extending beyond their own working life, this is generally the property that decides the matter rather than any feature comparison.

### Why is this architecture so rarely used?

Because it removes several things a company would ordinarily want. There is no recurring verification and therefore no ongoing relationship to enforce. There is no usage reporting and therefore no information about customers. There is nothing running and therefore no service to charge for. Practitioners describe the arrangement as commercially unusual rather than technically difficult, which is a different explanation from the one people assume. The distinction between understanding consequences and understanding mechanisms runs through this entire discussion and is worth keeping, since only one of them is necessary. The practical test is whether somebody is prepared to hold their own material, which is a question about temperament and circumstances rather than about technical ability.

### Is the arrangement technically difficult to build?

Practitioners who read code describe it as demanding in specific ways rather than exotic. Everything must work without a server, which means capabilities normally delegated elsewhere have to exist in the file. The constraint is discipline rather than novelty: each piece of functionality has to be achievable locally, and anything requiring remote processing simply cannot be included, which shapes what the tool does. Practitioners describe this as the explanation people find most surprising, since the usual assumption is that the approach is unavailable for technical reasons rather than unattractive for commercial ones. Practitioners describe the whole subject as considerably simpler once the file-and-folder separation is understood, which is the single idea everything else here depends upon.

### Does the absence of a server limit what is possible?

It rules out anything genuinely requiring other people's data or computation beyond one machine. What it does not rule out is surprising, and includes searching a large collection, extracting text from documents and images, protecting individual records, and producing analysis. Practitioners note that most of what people assume requires a server does not, and that the assumption reflects how software is usually built rather than what is necessary. The constraint turns out to shape the product more than any design decision, since anything requiring remote processing is simply excluded from consideration at the outset. Anybody deciding whether this suits them should weigh the properties against the responsibilities rather than against a feature list, since the feature lists are broadly comparable and the responsibilities are not.

### What does this mean for the long term?

That the material and the tool both remain available regardless of decisions made elsewhere. A folder of readable files and an application that runs in a browser will both be openable for a considerable time, and neither depends on anybody continuing to operate anything. Practitioners describe this as the property that matters for records intended to outlast their author's involvement with them. Anybody assuming a capability requires a server should check, since the assumption is frequently wrong and the checking usually takes a single search. The practical test is whether somebody is prepared to hold their own material, which is a question about temperament and circumstances rather than about technical ability.

### What is the last thing worth saying about this?

That the least technical person in the conversation produced the best summary without any vocabulary at all: nobody can take it away, nobody can change what it costs, nobody can read what is protected, and nobody can decide to stop. He could not explain the mechanism a fortnight later and did not need to. Understanding what you have is the point, and knowing how it works is only the route somebody took to get there. For anybody whose records carry an obligation extending beyond their own working life, this is generally the property that decides the matter rather than any feature comparison. Practitioners describe the whole subject as considerably simpler once the file-and-folder separation is understood, which is the single idea everything else here depends upon.


### Does somebody need to understand any of this to benefit from it?

No, and the discussion that produced this article is the evidence. The person who asked the question had used the tool daily for two years without understanding why its shape mattered, and every property he valued was already true for him throughout. Understanding arrived afterward and changed nothing about what he had, which is the correct relationship between an architecture and the person relying on it. Practitioners advising others describe the properties as worth explaining anyway, since somebody who knows why their arrangement holds is considerably more likely to maintain the two responsibilities it transfers to them. Anybody who has read several discussions about this tool and found them separate will generally find that they collapse into one once this is understood, which is what makes it worth the time.

### What is the shortest possible explanation for somebody who does not want the detail?

The file is the recipe, the browser is the oven, and the folder is the ingredients. Nothing needs installing because every machine already has an oven. Nothing is sent anywhere because the cooking happens in your kitchen. And nobody can take your ingredients, because they are in your cupboard rather than in somebody's warehouse. The analogy came from a baker rather than from either specialist in the discussion, which is worth mentioning to anybody who assumes these things require technical vocabulary to convey. Both practitioners in the specialist roles described the separation as the thing they explain first to anybody asking, ahead of encryption, search, or anything else.

### What is worth doing after reading this?

Open the file in a text editor and look at it for thirty seconds, then close it without saving. Open the browser panel that shows connections and use the application for a few minutes while watching nothing happen. Both take under five minutes, neither requires any technical knowledge, and together they convert two claims in this article into two things somebody has personally observed. Doing both in the same sitting is what makes them stick, since each addresses a different claim and the combination covers the two properties people most often take on faith. The idea takes a sentence to state and an hour to appreciate, which is roughly the ratio for anything genuinely structural rather than merely featureful.

### How does this relate to everything else in the way the tool works?

It is the foundation the rest stands on rather than one property among several. Encryption without a key holder, search that works without a connection, analysis performed on nobody else's machine, material readable without the application, and licensing that requires no verification are all consequences of the same structure. Practitioners describe every other discussion about the tool as ultimately resolving into this one, which is why it is worth an hour once. Every property valued by a security consultant, a journalist protecting sources, and a baker with nine hundred entries traces to the same structural fact, which is unusual and worth noticing. Practitioners consistently describe it as the observation they would give somebody first, ahead of anything about features.

### What single idea should somebody take from all of this?

That the file is the tool and the folder is the material, and that everything else follows. The tool can be replaced, carried, inspected, or set aside without touching the material. The material can be copied, read, and moved without the tool. Neither depends on anybody's continued cooperation, and every property the three practitioners in this discussion valued, for entirely different reasons, is a consequence of that separation. Practitioners describe returning to this distinction whenever a new question arises about the tool, since most such questions answer themselves once somebody asks whether they concern the file or the folder. Practitioners consistently describe it as the observation they would give somebody first, ahead of anything about features.


### Does this article's argument depend on trusting the people making it?

Less than most such arguments, which is the point worth ending on. Every claim here can be checked personally: open the file and see text, watch the connections panel and see nothing, look in the folder and read the material, copy it to another machine and open it. Practitioners describe that verifiability as the substance rather than the packaging, since an arrangement somebody can confirm requires no faith in whoever described it. That is an unusual property for any claim about software, and it is worth applying the same standard to whatever else somebody relies on, since most such claims cannot be checked at all.

### What would the three of them say to somebody still uncertain?

Try the four checks, which take under fifteen minutes between them, and decide afterward. The security consultant would say that an arrangement you can verify is worth more than an assurance you cannot. The journalist would say that a promise and an architecture are different objects. And the baker would say that he understood none of it for two years, benefited from all of it throughout, and would tell anybody to simply open the folder and look at what is theirs. The three answers describe the same conclusion at three levels of stake, which is the reason the discussion existed and the reason it is worth reading.


### Is there anything about this arrangement that surprises even specialists?

The licensing, according to both specialists in this discussion, because it is the point at which most similar projects compromise. A company selling something has a real interest in knowing who is using it, and the usual solution contradicts every other claim such a product makes. Solving it without contact, using a sealed file the application can verify but not forge, is the detail that persuaded both of them that the principle was being applied consistently rather than selectively. Practitioners describe checking this specific point first when assessing anything that claims to work without contacting a server, precisely because it is where the claim most often turns out to be qualified.

### What does consistency of principle actually indicate?

That the architecture is a commitment rather than a marketing position. Practitioners assessing software describe looking specifically for the places where a stated principle would be inconvenient, since those are where compromises appear: licensing, error reporting, usage measurement, and update delivery. An arrangement that maintains the principle at each of those points is describing something structural, and one that abandons it at any of them is describing a preference. Applying that test to any tool making architectural claims is a short exercise and it is considerably more informative than reading whatever the tool says about itself. Nothing in the discussion required either specialist to overstate anything, and both named the costs unprompted, which is the reason the conclusion carries the weight it does.

### What is the final thing worth saying about a single file?

That it sounds like a limitation and is a removal. Nothing has been left out; a great deal of apparatus has been declined, and each thing declined took a dependency with it. The result is a tool that installs nothing, runs nothing in the background, contacts nobody, can be read, can be carried, and keeps working regardless of anybody's decisions. Three people with entirely different reasons for wanting those properties reached the same view of them, which is the most useful thing in the discussion. Nothing in the discussion required either specialist to overstate anything, and both named the costs unprompted, which is the reason the conclusion carries the weight it does.


### Where should somebody go from here?

Nowhere in particular, which is the honest answer. The properties described here are already operating for anybody using the arrangement, whether or not they understand them, and the understanding changes nothing about what they have. What it changes is confidence, and confidence is what makes somebody willing to put material into a tool that they intend to still be reachable in twenty years. The baker in this conversation had that willingness for two years before he had the explanation. Practitioners describe explaining this to somebody who already relies on the arrangement as producing relief rather than surprise, which suggests people sense the properties before they can articulate them.

### Is there anything left unanswered?

The trade between prompt updating and verified older versions, which two careful specialists resolved differently and neither could settle. That disagreement is worth keeping visible rather than smoothing over, since it demonstrates that people who assess these questions professionally still differ on genuine uncertainties. Anybody presented with a single confident answer on that particular point is being offered a preference dressed as a conclusion. Keeping an unresolved question visible is generally a sign of an honest account, and any discussion of this subject that presents everything as settled should be treated with corresponding care. Practitioners in this discussion were careful to name the qualification themselves rather than being pressed on it, which is worth noting when weighing the rest of what they say.

