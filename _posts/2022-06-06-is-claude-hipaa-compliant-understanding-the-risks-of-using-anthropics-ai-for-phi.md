---
title: "Is Claude HIPAA Compliant? Understanding the Risks of Using Anthropic's AI for Protected Health Information"
description: "Claude is one of the most capable AI assistants available. For healthcare professionals, the question is not capability - it is compliance. Here is an honest examination of what HIPAA requires, where Claude currently stands, and what healthcare organizations should do about it."
date: 2022-06-06 17:00:00 -0600
cover: /assets/img/feature-screenshot-placeholder.svg
---

The most capable tools are not always the most appropriate tools. In healthcare, this distinction is not a philosophical preference - it is a regulatory imperative that carries specific financial and legal consequences for organizations that fail to observe it.

Claude, developed by Anthropic, is one of the most capable AI assistants available. Its reasoning depth is exceptional. Its ability to engage with complex, multi-part questions, summarize dense documentation, draft nuanced correspondence, and assist with analytical work has made it a productivity tool of genuine value across a wide range of professional applications. Clinicians who have used Claude for general, non-PHI tasks routinely describe it as among the most useful AI tools they have encountered.

None of that capability changes the compliance picture. And the compliance picture, as of the date of this article, is clear: Claude is not HIPAA compliant, Anthropic does not sign Business Associate Agreements for standard accounts, and healthcare organizations that use Claude to process, analyze, or store protected health information are creating HIPAA violations regardless of the care with which they use the tool or the legitimate clinical purpose behind the use.

This is not a nuanced compliance judgment call. It is a straightforward regulatory fact, and healthcare professionals deserve to understand it clearly before making tool decisions that carry personal and organizational legal risk.

This article examines the specific HIPAA requirements that apply to AI tools used in clinical workflows, the specific ways in which Claude's current architecture and data handling practices do not satisfy those requirements, the legal and financial risks that follow from using Claude with PHI, and the practical pathways that allow healthcare organizations to benefit from AI assistance without creating the compliance exposure that Claude's current configuration creates.

<!--more-->

## The Business Associate Agreement: Why Its Absence Is the Central Compliance Fact

The Business Associate Agreement is not a technicality. It is the legal mechanism through which HIPAA governs the entire ecosystem of vendors, technology providers, and service organizations that handle protected health information on behalf of covered entities. Understanding why the BAA matters - and why its absence in Claude's standard configuration is the central compliance fact about Claude and healthcare - requires understanding what the BAA actually does and why HIPAA requires it.

Under HIPAA, a business associate is any entity that performs functions or activities on behalf of a covered entity that involve the use or disclosure of protected health information. This definition is deliberately broad. It captures software platforms, cloud storage providers, analytics services, transcription tools, communication systems - any external party whose work involves touching PHI that the covered entity has collected. The definition clearly encompasses an AI assistant that is used to process, analyze, or help document clinical information.

The BAA is the legal instrument that extends HIPAA obligations to business associates. When a covered entity executes a BAA with a vendor, the vendor formally accepts specific obligations: implementing safeguards to protect PHI, using and disclosing PHI only as permitted by the BAA and HIPAA, reporting breaches to the covered entity, ensuring that any subcontractors who handle PHI are also subject to equivalent obligations, and returning or destroying PHI at the end of the relationship.

Without a BAA, a vendor who handles PHI has not accepted these obligations. More importantly for the covered entity: without a BAA, any disclosure of PHI to the vendor is an unauthorized disclosure under HIPAA's Privacy Rule. Not potentially unauthorized. Not unauthorized under certain circumstances. Unauthorized. The BAA requirement is a bright line, not a sliding scale.

Anthropic does not sign Business Associate Agreements for Claude in its consumer-facing products or standard API configuration. This is documented in Anthropic's terms of service and privacy materials. Healthcare organizations that want to use Claude with PHI cannot do so in a HIPAA-compliant manner through standard channels, because the contractual mechanism that HIPAA requires simply does not exist in those channels.

The practical implication is unambiguous: entering PHI into Claude - any protected health information, including names combined with clinical information, medical record numbers, dates of service, clinical notes, diagnostic information, or any other information that identifies a patient and relates to their health - constitutes an unauthorized disclosure under HIPAA's Privacy Rule. The disclosure occurs at the moment the information is entered. The fact that the clinician's intent was clinical rather than exploitative does not change the legal characterization of the act.

## Data Retention Practices and the Control Requirement

Beyond the BAA absence, Claude's data handling practices create a second layer of compliance incompatibility with HIPAA's requirements.

HIPAA's Privacy and Security Rules establish that PHI must remain under the exclusive control of the covered entity that holds responsibility for it. The covered entity must be able to specify who accesses PHI, when, for what purpose, and under what authorization. The covered entity must be able to audit PHI access and demonstrate to regulators that appropriate safeguards were in place and functioning.

When users interact with Claude through standard channels, their input - including any PHI they enter - may be logged, retained, and used for purposes related to Anthropic's model development, safety research, quality assurance, and service improvement. This data handling is documented in Anthropic's privacy policy. It is not a hidden practice - Anthropic is transparent about it. But it is a practice that is fundamentally incompatible with HIPAA's control requirements.

PHI that is retained by a vendor for the vendor's own operational purposes is PHI that is outside the covered entity's exclusive control. The covered entity cannot specify that the PHI should not be used for model training. The covered entity cannot retrieve or delete the retained PHI from the vendor's systems in a manner that satisfies HIPAA's data disposal requirements. The covered entity cannot limit the vendor's use of the retained PHI to the specific purpose for which it was originally disclosed. The BAA that would create these contractual controls does not exist.

The minimum necessary standard compounds the retention concern. HIPAA requires that PHI use and disclosure be limited to the minimum amount necessary to accomplish the intended purpose. AI interactions are not designed to implement minimum necessary controls on the data they process. A clinician who enters a patient's full clinical presentation into Claude to get help with a documentation task has not implemented minimum necessary controls - the full presentation is processed, potentially retained, and potentially used for purposes beyond the original clinical documentation task. There is no technical mechanism within Claude's interface that limits which portions of an entered PHI are processed versus retained versus used for model improvement.

The combination of broad data retention practices and the absence of minimum necessary controls creates a data governance profile that is incompatible with HIPAA compliance regardless of the security quality of Anthropic's technical infrastructure. Security and compliance are different dimensions: a platform can be technically secure while still being legally non-compliant.

## Third-Party Integrations and the Compliance Chain Problem

The compliance exposure from using Claude with PHI is not limited to direct interactions through Anthropic's interface. Claude is accessible through a growing ecosystem of third-party integrations - applications built on Claude's API, productivity tools that incorporate Claude's capabilities, workflow automation systems that connect Claude to other platforms.

Each integration introduces additional complexity to the compliance picture. A healthcare organization's staff member who uses a productivity tool like Notion or Slack that has incorporated Claude's capabilities may interact with Claude's processing without realizing it. A workflow automation that routes clinical information through Claude's API to generate structured output introduces PHI into Claude's processing pipeline even if the clinical information is not directly entered into a chat interface.

HIPAA's compliance framework applies to the entire data pathway, not just the primary platform. Every system that handles PHI in a workflow must satisfy HIPAA's requirements - its own technical safeguards, its own BAA with the covered entity, its own documented data handling practices. A workflow in which PHI passes from a compliant primary system, through an intermediate integration that lacks a BAA, to Claude's processing, has created compliance gaps at multiple points in the chain.

The practical challenge is that healthcare organizations often do not have complete visibility into the full technology stack that processes their information. Staff use tools that seem unrelated to clinical workflows but that may, in some configurations, route information through services that lack HIPAA compliance infrastructure. The rapid proliferation of AI integrations in productivity software means that tools that were clearly non-clinical two years ago may now incorporate AI processing that creates potential PHI pathways.

A thorough AI risk assessment for a healthcare organization must therefore evaluate not just the primary tools that staff use for clinical workflows, but the integration architecture of all tools that might come into contact with PHI. Tools that staff use for documentation, communication, scheduling, and administrative work all carry potential PHI exposure if they have incorporated AI processing that routes through non-HIPAA-compliant services.

Each third-party tool that touches PHI requires its own BAA. Each integration that routes PHI through a third-party service requires that service to have a BAA in place. The compliance chain must be unbroken from the covered entity through every business associate to every subprocessor. A single missing BAA in the chain is a compliance gap regardless of how rigorous the rest of the chain's compliance is.

## The Audit Trail Requirement: Accountability That Cannot Be Reconstructed

HIPAA's audit control requirement is among the most operationally demanding of the Security Rule's technical safeguards. It requires covered entities to implement hardware, software, or procedural mechanisms that record and examine activity in information systems that contain or use electronic PHI.

The audit trail serves multiple compliance purposes. It provides the evidence that PHI was accessed only by authorized personnel for authorized purposes. It enables detection of inappropriate access that might otherwise go unnoticed. It provides the documentation that regulators examine when investigating potential breaches or compliance failures. And it is the foundation of the accountability that HIPAA's enforcement framework requires covered entities to be able to demonstrate.

Claude provides no native audit reporting or administrative console for healthcare compliance tracking. There is no interface through which a healthcare compliance officer can query which PHI was processed through Claude interactions, which users entered PHI, when those interactions occurred, or what the content of those interactions was. If PHI were entered into Claude by clinical staff, the covered entity would have no way to produce the audit record that HIPAA requires for any interaction with that PHI.

This is not a gap that can be addressed by careful use practices. The audit trail must be generated and maintained by the system processing the PHI. A covered entity cannot reconstruct an audit trail for system interactions that were not logged by the system. If a compliance investigation or OCR audit requires the covered entity to demonstrate that specific PHI was handled appropriately, the absence of Claude-specific audit records makes that demonstration impossible.

The auditability gap is particularly problematic in the context of breach investigations. HIPAA's breach notification rules require covered entities to investigate suspected breaches and determine whether a breach occurred. A breach investigation involving clinical AI interactions requires the ability to query the records of those interactions - to determine what PHI was involved, how long it was accessible, and whether there is any evidence of unauthorized access or use. Without audit records, the breach investigation cannot proceed in a manner that satisfies HIPAA's requirements, and the uncertainty about whether a reportable breach occurred may itself trigger notification obligations.

For healthcare organizations that have built workflows incorporating Claude - even well-intentioned ones, even ones used carefully by compliance-aware staff - the absence of audit trails represents an unresolvable compliance gap. There is no technical remedy for audit records that were never generated.

## The Penalty Framework: What Non-Compliance Actually Costs

Healthcare professionals who understand the abstract compliance argument sometimes underestimate the concrete financial and legal consequences that non-compliance creates. The penalty framework that HIPAA establishes is worth examining specifically, because the scale of potential consequences is a material consideration in AI tool selection decisions.

HIPAA's civil penalty structure is tiered based on culpability. The four tiers are: violations the covered entity did not know about and could not have known about with reasonable diligence; violations due to reasonable cause but not willful neglect; violations due to willful neglect that are corrected within a defined period; and violations due to willful neglect that are not corrected.

The per-violation penalties range from a minimum of one hundred dollars for unknowing violations to a minimum of ten thousand dollars per violation for willful neglect not corrected. Annual penalty caps exist for each tier, but the caps apply to each category of violation separately - organizations facing multiple violation categories can face cumulative annual exposures well beyond any single cap.

The culpability characterization matters significantly for the penalty calculation. A healthcare organization that was unaware that Claude lacked a BAA and used it with PHI without knowing the compliance implications would be characterized in the unknowing tier - lower penalties. A healthcare organization that was aware Claude lacked a BAA, was informed of the compliance implications, and continued using Claude with PHI would be characterized in the willful neglect tier - substantially higher penalties. An organization that is now reading this article and continues using Claude with PHI falls clearly into the latter characterization.

The financial consequences extend beyond HIPAA's regulatory penalties. Breaches involving PHI - including disclosures to unauthorized parties such as non-BAA AI vendors - trigger notification obligations. Breaches affecting 500 or more individuals require notification to the Secretary of HHS and to prominent media outlets in the affected geographic area. These public notification requirements create reputational consequences that can be more economically damaging than the regulatory fines, particularly for healthcare practices in communities where patient relationships depend on trust and word-of-mouth reputation.

Class action litigation following healthcare data breaches has become an established feature of the legal landscape. State privacy statutes in many jurisdictions provide private rights of action that allow patients to bring claims when their health information is disclosed without authorization. The legal fees, settlement costs, and management attention consumed by class action litigation following a PHI breach frequently exceed the regulatory penalty costs.

For clinical professionals rather than organizations, individual liability is also a dimension of the risk. HIPAA includes criminal penalties for individuals who knowingly obtain or disclose PHI in violation of HIPAA, with higher penalties for violations committed under false pretenses or with intent to sell or use PHI for personal gain. Clinical staff who knowingly enter patient PHI into non-compliant AI systems are not fully insulated from individual liability by the fact that they were acting in their professional capacity.

## Safe Practices: Using Claude Without Creating Compliance Exposure

The compliance picture for Claude and PHI does not mean that healthcare professionals must forgo Claude's capabilities entirely. It means that Claude should be used only for tasks that genuinely do not involve PHI - and that thoughtful workflow design can enable substantial AI assistance within those boundaries.

The foundational principle is the distinction between PHI and non-PHI content. PHI is individually identifiable health information - information that identifies or could reasonably be used to identify a specific individual in combination with health-related information about them. Not all clinical content is PHI. General clinical information, educational content, policy documentation, and administrative writing that does not reference specific patients does not constitute PHI.

Healthcare professionals can use Claude productively for a wide range of tasks that fall clearly outside the PHI boundary. Drafting patient education materials for a condition or treatment without any specific patient information. Reviewing or summarizing published clinical literature. Developing clinical policies or procedures. Writing training materials for staff. Creating documentation templates. Composing administrative correspondence that does not reference patient information. Researching billing and coding questions. Developing quality improvement documentation.

For each of these uses, Claude's capabilities are available without HIPAA concerns because no PHI is involved. The compliance question does not arise because the threshold that triggers HIPAA's requirements - protected health information - is not crossed.

The de-identification approach extends the boundary of safe Claude use toward more clinical content. HIPAA's Safe Harbor de-identification standard specifies eighteen categories of identifiers whose removal, when done completely, renders the resulting information de-identified and outside HIPAA's scope. A clinical scenario from which all Safe Harbor identifiers have been removed - the patient's name, geographic information below state level, all dates, telephone numbers, Social Security numbers, medical record numbers, and other specified identifiers - can be used with Claude for clinical reasoning assistance without involving PHI.

The practical discipline required is systematic. Before entering any clinical information into Claude, the clinician should identify every Safe Harbor identifier present in the information and replace each with a fictional placeholder or remove it entirely. The resulting de-identified scenario can then be used for clinical reasoning assistance - differential diagnosis development, treatment option exploration, documentation structure assistance - with the result later adapted to incorporate the actual patient-specific information.

The de-identification workflow requires time investment that direct clinical input would not. But it provides access to Claude's clinical reasoning capabilities within a compliance-defensible framework, for clinicians who find those capabilities genuinely valuable for difficult cases.

## Developing Organizational AI Policies for Healthcare Settings

The individual compliance considerations described above aggregate into an organizational policy question for healthcare organizations: what rules should govern staff use of AI tools, and how should those rules be implemented and enforced?

HIPAA's administrative safeguard requirements address this question directly. The security management process standard requires covered entities to implement policies and procedures to prevent, detect, contain, and correct security violations. The information access management standard requires policies governing access authorization and modification. The security awareness and training standard requires training all workforce members on security policies and procedures.

Together, these requirements create an obligation for healthcare organizations to have explicit, documented policies governing how staff use technology tools - including AI tools - in workflows that may involve PHI. An organization that has not developed AI-specific policies is not satisfying its administrative safeguard obligations, regardless of how careful individual staff members may be in practice.

An organizational AI use policy for healthcare settings should address several specific elements. The policy should specify which AI tools are approved for use in organizational workflows and explicitly identify tools that are not approved for use with PHI - Claude should be on the latter list in its current standard configuration. The policy should define the categories of information that may not be entered into any AI tool without compliance officer review. It should establish a process for evaluating new AI tools before deployment, including requirements for BAA availability and security documentation review.

The policy should specify the de-identification requirements that apply when staff use AI tools for clinical assistance - defining what de-identification means, which identifiers must be removed, and how to verify that de-identification is complete before AI interaction. It should establish incident reporting procedures for suspected PHI exposures through AI tools, defining what constitutes a reportable event and how staff should respond to suspected exposures.

Training is the mechanism through which policy becomes practice. A policy that exists in documentation but has not been communicated and reinforced through staff training is not satisfying HIPAA's security awareness standard. Training on AI tool use should be specific: what tools are approved and for what uses, what PHI means in the context of AI tool use, how de-identification is performed, what the reporting procedure is, and what the personal consequences of policy violations are.

The policy and training program should be reviewed and updated on a defined cycle - at least annually, and more frequently when significant changes in the AI tool landscape or the organization's AI use practices occur. The AI compliance landscape is evolving rapidly, and policies that accurately reflect the current state require active maintenance.

## HIPAA-Compliant Alternatives: Where AI Assistance Is Available for Clinical Use

For healthcare organizations that want AI assistance for clinical workflows involving PHI, the compliant pathway requires tools and platforms that have built HIPAA compliance infrastructure and are willing to execute BAAs.

Major cloud providers have developed HIPAA-eligible service offerings that allow healthcare organizations to access AI capabilities within compliance-governed frameworks. Google Cloud Healthcare AI, Microsoft Azure Healthcare, and Amazon Web Services HIPAA-eligible services each provide AI and machine learning capabilities within infrastructure designed to satisfy HIPAA requirements, with BAAs available and security documentation supporting compliance assessment.

These enterprise platforms require more implementation effort than using a consumer AI tool directly - they are designed for organizational deployment with IT involvement, not for individual clinician direct access. But they provide the compliance infrastructure that clinical AI workflows require, and the investment in proper deployment is substantially less than the cost of a HIPAA violation investigation.

Healthcare-specific AI tools designed explicitly for clinical documentation and workflow support represent a growing category of compliant options. Clinical documentation AI tools that integrate directly with electronic health record systems have been built with HIPAA compliance as a design requirement from the beginning. These tools may offer more narrow AI capabilities than general-purpose assistants like Claude, but they offer those capabilities within a fully compliant framework.

For healthcare organizations with technical resources and specific requirements that commercial solutions do not fully address, locally-hosted AI models represent the most architecturally private option. A language model deployed on healthcare organization infrastructure - or on a managed HIPAA-compliant private cloud - provides AI capabilities without any PHI leaving the organization's own controlled environment. The compliance questions that arise from sending PHI to external AI services do not apply when the AI processing happens on the organization's own infrastructure.

## The Role of Local, Offline Knowledge Management in Clinical Privacy

For the clinical documentation and knowledge management layer that underlies clinical practice - the notes, assessments, treatment plans, supervision documentation, and accumulated clinical knowledge that practitioners build over the course of their careers - locally-held, offline-first tools provide a privacy architecture that cloud-based AI platforms cannot match.

VaultBook addresses the clinical knowledge management need with an architecture designed for privacy from the ground up. Everything - clinical notes, attached assessments, treatment documentation, research references, correspondence - lives in a local folder on the practitioner's own hardware. The AES-256-GCM encryption with locally derived keys ensures that content is protected by cryptography no third party can bypass. The zero network request architecture means content never reaches any external system, making the BAA question structurally irrelevant for knowledge content held in VaultBook.

The AI-powered features within VaultBook - semantic search, Related Entries, AI Suggestions - operate entirely locally, learning from the practitioner's specific workspace without transmitting any content to external AI processing services. These capabilities provide genuinely useful AI assistance for knowledge retrieval and workflow orientation while preserving the complete privacy of the clinical content they serve.

For practitioners who want to use Claude for general, non-PHI assistance while maintaining genuinely private clinical documentation and knowledge management, the combination of Claude for non-PHI tasks and VaultBook for sensitive clinical documentation represents a thoughtful division of tools by their appropriate compliance profiles.

## Security Is Not Compliance: Why Strong Encryption Does Not Resolve the BAA Gap

A response that healthcare professionals sometimes offer to the compliance concerns about Claude is that Anthropic employs strong security controls - encryption, access restrictions, data center security - and that these technical protections make the compliance concern less pressing in practice. This reasoning conflates two distinct dimensions of the regulatory framework that HIPAA establishes.

Security and compliance are related but different things. A platform can be technically secure - implementing strong encryption, maintaining robust access controls, running in well-protected data centers - while still being legally non-compliant with HIPAA. The compliance framework is not only a set of technical security requirements. It is a complete regulatory structure that includes contractual requirements (the BAA), administrative requirements (policies, training, risk assessments), procedural requirements (audit trails, breach response), and substantive data governance requirements (minimum necessary, access controls, retention limits).

Technical security addresses the risk that unauthorized external parties - hackers, malicious actors, external attackers - will access the data. HIPAA compliance addresses a broader set of risks: that the vendor will use the data for unauthorized purposes, that the vendor will not satisfy breach notification obligations, that the vendor's subprocessors will not maintain appropriate protections, that the covered entity will not be able to audit PHI access, that the data will not be retained and disposed of according to the covered entity's requirements.

Anthropic's security controls - which are genuine and meaningful - address the external attacker risk. They do not address the business associate relationship, the data governance requirements, the audit trail obligations, or the contractual accountability that the BAA framework creates. These are different dimensions of the compliance picture, and each must be satisfied independently.

The practical implication is that "Claude is secure" and "Claude is HIPAA compliant" are not the same claim, do not imply each other, and should not be treated as interchangeable for healthcare compliance purposes. A healthcare professional who decides to use Claude with PHI on the basis of Anthropic's security reputation is making a decision based on the wrong category of analysis. Security is a necessary but not sufficient condition for HIPAA compliance. The other conditions - the BAA, the data governance controls, the audit infrastructure - are not satisfied by security measures alone.

This distinction is not academic. OCR enforcement actions have been brought against covered entities that had technically secure systems but lacked the administrative and contractual compliance infrastructure that HIPAA requires. The enforcement record is consistent: HIPAA compliance requires the full framework, not just technical security.

## Conducting a Formal AI Risk Assessment for Healthcare Organizations

HIPAA's administrative safeguard requirements include an obligation to conduct a formal risk assessment that identifies the specific risks to PHI in the covered entity's environment. For healthcare organizations that have adopted, are considering, or have staff who may be using AI tools, this risk assessment obligation applies specifically to AI-related PHI risks.

A formal AI risk assessment for a healthcare organization should proceed through several specific stages. The inventory stage identifies every AI tool that is in use or under consideration in the organization - not just the tools that were formally adopted through IT or compliance review, but the tools that staff are actually using, including consumer AI assistants used for administrative tasks that may border on clinical workflows. Shadow AI use - staff using AI tools that have not been formally reviewed or approved - is a significant risk category in many healthcare organizations.

The PHI exposure analysis stage evaluates each identified AI tool for potential PHI contact. This analysis should be specific about the use cases: is the tool being used for tasks that inherently involve PHI, for tasks that could involve PHI if not carefully managed, or for tasks that clearly do not involve PHI? The analysis should identify the realistic range of how each tool is being used, not just its intended use.

The compliance gap analysis stage evaluates each AI tool with PHI contact against HIPAA's compliance requirements: Is there a BAA in place? Does the vendor's data handling satisfy HIPAA's control requirements? Does the tool provide audit trail capabilities? Are the vendor's security practices documented and satisfactory? For tools like Claude in standard configuration, the compliance gap analysis produces a clear finding: no BAA, incompatible data handling, no audit infrastructure, unsuitable for PHI use.

The remediation planning stage develops specific actions for each identified compliance gap. For tools with compliance gaps and PHI contact, the remediation plan should include either obtaining the missing compliance infrastructure (BAA, security documentation, audit capabilities) or removing PHI from the tool's workflows and implementing controls to prevent future PHI contact. For Claude specifically, the remediation plan should include staff guidance that prohibits PHI entry, training on the compliance boundary, and workflow review to identify any clinical tasks that need to be moved to compliant platforms.

The risk assessment documentation should record all stages of the analysis, the findings, and the remediation actions taken. This documentation serves multiple purposes: it satisfies HIPAA's documentation requirements for the risk assessment itself, it provides evidence of due diligence if a compliance question arises, and it provides the baseline from which future assessments can measure changes in the AI risk landscape.

The assessment should be updated on a defined cycle. The AI landscape is changing rapidly, and the risk profile of specific tools changes as vendors update their compliance infrastructure, as new integrations create new exposure pathways, and as staff adopt new tools that were not present in the previous assessment. Annual updates at minimum, with interim updates when significant changes occur, should be the standard.

## Building Toward a Compliant AI-Enabled Healthcare Future

The compliance limitations that currently apply to Claude in healthcare contexts are not permanent features of the AI landscape. They are the current state of a rapidly evolving technology and regulatory environment. Anthropic and other major AI developers are aware of the healthcare market and the compliance requirements that govern clinical AI use. The trajectory of AI compliance infrastructure in healthcare is toward greater capability and accessibility rather than away from it.

Healthcare organizations that develop rigorous AI governance practices now - that build AI use policies, implement staff training, conduct formal risk assessments, and establish clear boundaries between compliant and non-compliant AI use - will be well-positioned to adopt emerging compliant AI tools as they become available. The compliance discipline that the current limitations require is also the discipline that enables responsible adoption of more capable compliant tools as the landscape develops.

In the meantime, the immediate imperative is clear. Claude is not HIPAA compliant in its standard configuration. Healthcare professionals who have been using Claude with PHI, who have staff who may be doing so, or who are considering AI tool adoption for clinical workflows need to assess their current practices, update their policies, train their staff, and ensure that PHI is handled only through compliant channels.

The compliance obligation is not optional, and the consequences of non-compliance are not abstract. PHI is the most sensitive information that healthcare professionals are entrusted with - information shared in the specific protection of a clinical relationship by patients who have a reasonable expectation that it will be handled with the highest standards of care and discretion.

Meeting that expectation in the age of AI requires the same rigor that HIPAA has always required: understanding the regulatory framework, selecting tools that satisfy it, and maintaining the organizational practices that keep compliance real rather than nominal. For clinical AI specifically, that means not using Claude with PHI until Anthropic provides the HIPAA compliance infrastructure that clinical use requires.

For the clinical documentation and knowledge management layer that holds the most sensitive records of clinical care, VaultBook's private, encrypted, locally-held architecture provides the foundation that professional obligations demand - today, without waiting for the AI compliance landscape to catch up.

In healthcare, compliance is not optional. The tools that handle patient information must be chosen with the weight of that responsibility in mind.
