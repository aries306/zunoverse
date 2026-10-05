# ZYOVERSE — Master Source of Truth
## End-to-end project, product, architecture, and build handoff
**Version:** 1.0  
**Prepared:** 2 October 2026  
**Status:** Consolidated working specification; implementation and naming gates remain open  
**Canonical spelling:** **ZYOVERSE** (Z-Y-O-V-E-R-S-E)

> **Purpose:** This is the portable handoff for a new builder, engineering team, product partner, or future AI system. It consolidates the durable intent and implementation direction found in the available project handoffs, architecture briefs, versioned ZIO/XIO packages, naming research, and current project context. It separates confirmed principles from historical names, implementation evidence, proposals, and unresolved decisions. It is not a claim that every feature is already implemented or production-ready.

---

# 1. Executive brief

ZYOVERSE is the umbrella project and intended larger universe/ecosystem. The technical product lineage began under the working names **XIO** and **ZIO**, with **Astara** used for the human-facing intelligence experience. The current owner direction in recent project context places **ZYOVERSE** at the umbrella level and **Zioren** as the intelligence/system name; **Auren** is a character/entity concept and **Solyn** remains a possible character, world, or faction name. These current names must be reconciled with the older technical naming and must not be treated as legally cleared.

The core product thesis is not “another chatbot.” It is **personal intelligence infrastructure**: a durable system that understands a person's goals and changing context, selectively preserves meaningful memory, retrieves it when relevant, explains its evidence, coordinates specialist capabilities, helps create and execute work, verifies outcomes, and learns from feedback over time.

The central differentiator is the **Memory Fabric**, especially **Contextual Memory**. Memory must preserve not only what was said, but why it mattered, where it applied, the conditions under which it was true, where it came from, how certain it is, whether it has changed, and whether it should influence the current task. A memory may become dormant without being erased; when context returns, it must be retrieved and re-evaluated before use.

The architecture has evolved across multiple generations. Historical packages contain useful foundations and partial implementations, but they are not interchangeable or automatically production-ready. The 5.8 ZIO package documents production-oriented primitives for contextual memory, work graph processing, connected-source retrieval, governance, OAuth, encrypted connector tokens, idempotent actions, leases/retries, provenance, contradiction handling, and outcome verification. Its own release gate explicitly leaves deployment and live-integration tasks open.

**Primary build strategy:** prove contextual memory end-to-end first; then add orchestration, source connectors, governed actions, outcome verification, specialized agent routing, graph relationships, learning, and a unified command experience. Do not attempt to build the entire ecosystem as one undifferentiated release.

---

# 2. Source and confidence conventions

This document uses four labels:

- **Confirmed principle** — repeatedly established in the project handoffs or directly specified by the owner.
- **Observed in source package** — present in a file, architecture note, migration, test, or release gate. This proves the artifact contains the item, not that it is deployed or operational.
- **Proposed implementation** — a concrete engineering recommendation to make the vision buildable; it should be accepted or revised by the owner/team.
- **Open decision / release gate** — requires owner decision, current repository inspection, credentials, external verification, or professional review.

When historical material conflicts, prefer the newest explicit owner direction for product identity, but prefer the actual current repository and staging evidence for technical state. Never silently resolve a conflict by inventing facts.

---

# 3. Project identity and naming

## 3.1 Current naming direction

| Layer | Current direction | Status |
|---|---|---|
| Umbrella universe / ecosystem | **ZYOVERSE** | Current spelling confirmed by owner; legal clearance not established |
| Intelligence/system | **Zioren** | Current direction from recent context; reconcile with ZIO/XIO/Astara technical lineage |
| Character/entity | **Auren** | Conceptual role; prior research identified commercial/technology use, so do not assume clearance |
| Possible character/world/faction | **Solyn** | Provisional concept only |
| Legacy technical names | XIO, ZIO, Astara, NEXUS, ZIO-EFFECT | Historical architecture and code terms; preserve in migration maps and source references |

**Important distinction:** The larger ZYOVERSE brand/universe and the personal-intelligence product are related but not identical concepts. Do not let worldbuilding terminology obscure engineering boundaries. If ZYOVERSE is intended to become a fictional franchise as well as a software ecosystem, keep those as separate workstreams with an explicit relationship.

## 3.2 Naming and legal gate

The 30 September 2026 naming research is preliminary. It reports that several earlier names have conflicts or concerns, and it explicitly says CIPO, EUIPO, WIPO, broader social handles, some app stores, and professional linguistic screening were not completed. Earlier terms including **Vaelora, Auren, Lattice, Echo, Forge, ZYBER, VELORA, ORIN, and VALE** were rejected or flagged in the reviewed material. Do not reuse a rejected name as if cleared.

A separate set of coined names was marked “clear to investigate further,” not “legally cleared.” Examples in that report include Vanthryl, Solvethra, Kaelyth, Corweft, Limvane, Thenlyth, and Atelyth. The report says the owner should review the naming clearance before architecture or cinematic voice work proceeds. Treat these as research candidates, not adopted product names.

Before committing to public branding, domains, filing, launch, or substantial brand investment:
1. Search CIPO (Canada), USPTO (United States), EUIPO, and WIPO Global Brand Database.
2. Search relevant classes and related goods/services; have trademark counsel assess likelihood of confusion.
3. Check domains and social handles at the time of decision.
4. Check Apple App Store, Google Play, Microsoft Store, Steam if relevant, and other target distribution channels.
5. Run native-speaker linguistic screening in target languages.
6. Record date, exact query, jurisdiction, class, result, and reviewer for each check.

No result from a limited search is proof of worldwide availability.

---

# 4. Vision, category, and product promise

## 4.1 Category

**Personal intelligence infrastructure**: a durable intelligence layer between a person and the expanding universe of information, models, software, agents, tools, and workflows.

## 4.2 Product thesis

The system should develop an enduring but revisable understanding of a person’s goals, projects, constraints, preferences, knowledge, and active context. It should use that understanding to help the person think, decide, learn, create, and act better over time.

The product is not merely:
- a chat interface with a vector database;
- a prompt library;
- a generic retrieval-augmented generation (RAG) wrapper;
- an opaque user profile;
- a collection of disconnected agents;
- an AI dashboard with decorative motion.

The intended advantage is the relationship between **context, memory, trust, reasoning, tools, action, outcomes, and learning over time**.

## 4.3 Core promise

> Nothing important should disappear just because the moment or conversation ended.

Supporting idea: **Build for the return of context.**

Avoid promising perfect recall, infallibility, fully autonomous judgment, or certainty that the system cannot demonstrate.

## 4.4 North-star loop

```text
INTENT
  → CONTEXT ASSEMBLY
  → CONTEXTUAL MEMORY
  → EVIDENCE / RESEARCH
  → REASONING
  → OPTIONS / RECOMMENDATION
  → GOVERNANCE / APPROVAL
  → ACTION
  → VERIFICATION
  → OUTCOME
  → FEEDBACK / LEARNING CANDIDATE
  → MEMORY RE-EVALUATION
  → BETTER FUTURE CONTEXT
```

This loop is the conceptual backbone. A task may skip steps that are unnecessary; high-impact actions must not skip authorization, governance, or verification.

---

# 5. Core principles and invariants

1. **Context is first-class.** Context includes goals, projects, constraints, time, people, current work, history, and temporary versus durable relevance.
2. **Memory is selective.** Do not permanently store every utterance. Use explicit consent and meaningful capture rules.
3. **Memory is not belief.** Memory, research/evidence, belief, pattern, insight, recommendation, action, and outcome are distinct objects.
4. **Provenance is mandatory.** Important claims and memories should be traceable to their source and derivation.
5. **Confidence is not truth.** Model confidence must not be presented as objective certainty.
6. **Scope matters.** A project-specific preference must not silently become a universal preference.
7. **Dormancy is not deletion.** Useful history can become inactive without being erased.
8. **Re-evaluate before use.** Retrieved memory is a candidate, not an automatic instruction or recommendation.
9. **Contradictions are explicit.** New conflicting evidence must trigger review or re-evaluation, not silent overwriting.
10. **User authority remains central.** Users can inspect, correct, suppress, export, and delete memory; pause learning; and approve consequential actions.
11. **Tools have bounded authority.** Tool access is scoped, least-privilege, logged, and governed by risk.
12. **Providers are replaceable.** Model and embedding providers must sit behind interfaces so the product is not locked to one vendor.
13. **Outcomes close the loop.** Accepted/rejected recommendations and action results should inform future learning only under policy and consent.
14. **Explainability is practical.** The system should explain why a memory, source, agent, or recommendation was used.
15. **Motion communicates state.** Visual effects must represent actual listening, retrieval, uncertainty, verification, or action states—not fake intelligence.

---

# 6. System architecture

## 6.1 Logical layers

1. **Experience layer** — responsive web/mobile UI, conversation, project workspaces, memory inspection, agent activity, command center, relationship views.
2. **Identity and policy layer** — authentication, account ownership, entitlements, consent, rate limits, tenant isolation, role/permission checks.
3. **Context service** — active task, user request, project, goal, constraints, time, session state, relevant recent events.
4. **Memory Fabric** — structured memory records, lifecycle, scope, provenance, confidence, relationships, consent and deletion semantics.
5. **Retrieval and source fabric** — lexical and semantic retrieval, source connectors, chunking, ranking, freshness and authority signals, citations/provenance.
6. **Research layer** — evidence records derived from external sources or user-provided documents; research does not automatically become memory.
7. **NEXUS / processing layer** — downstream analysis of evidence and work items; emits candidate beliefs, patterns, insights, or actions without silently promoting them.
8. **Intelligent Core / orchestration** — intent classification, context assembly, retrieval, planning, routing, verification, and response composition.
9. **Agent role layer** — specialist capabilities invoked as needed; roles need not be separate models.
10. **Governance / action control plane** — capability checks, risk classification, approval gates, action leases, idempotency, retries, dead letters, audit records.
11. **Connector runtime** — server-side integrations that perform explicitly registered, authorized operations.
12. **Outcome and learning layer** — verifies results, records feedback, detects contradictions, creates learning candidates, re-evaluates memories.
13. **Observability and operations** — logs, traces, metrics, health/config readiness, audit trail, backups, migrations, incident response.

## 6.2 Reference flow

```text
User
  ↓
Authentication + ownership + consent + rate limit
  ↓
Intent and active-context assembly
  ↓
Memory candidate retrieval ─── External-source retrieval
  ↓                                  ↓
Memory re-evaluation             Research/evidence records
  └──────────────┬───────────────────┘
                 ↓
       Reasoning / NEXUS processing
                 ↓
       Options / recommendation
                 ↓
       Governance + risk decision
          ┌──────┴──────┐
          │             │
       Approval       No action /
       required       answer only
          │
          ↓
  Idempotent action lease
          ↓
  Authorized connector execution
          ↓
  Evidence + outcome verification
          ↓
  Feedback / contradiction scan
          ↓
  Learning candidate + memory review
```

## 6.3 Data architecture

Use **structured records plus semantic retrieval**. Embeddings alone cannot preserve scope, provenance, lifecycle, permissions, contradiction state, or user control. Keep canonical facts and relationships queryable in the database; use embeddings as one retrieval signal, not the source of truth.

The current technical lineage has used or proposed:
- **Clerk** for authentication in the server-backed SaaS direction;
- **Neon/Postgres** for persistent relational data;
- **AppDeploy** in earlier deployed/foundation packages;
- **Vercel** in a later application/deployment path;
- server-side connector adapters and managed secrets;
- replaceable model and embedding providers.

These are historical/observed choices, not a mandate to use every platform at once. Before a new build, inspect the actual repository, deployment, and database and choose one coherent runtime. Do not duplicate systems or delete historical resources until a verified checkpoint exists and the owner approves retirement.

---

# 7. Memory Fabric and Contextual Memory

## 7.1 Memory semantics

A memory record is a durable, contextualized item that may be relevant later. It is not automatically a universal truth, permanent preference, or command.

Each important memory should preserve:
- content and type;
- owner/tenant;
- original context and contextual conditions;
- scope (global, project, goal, conversation, time-bounded, etc.);
- source and source reference;
- provenance chain and derivation;
- confidence and basis for confidence;
- user-confirmed status;
- created, last-seen, last-verified, and expiry/review timestamps;
- lifecycle state;
- current relevance assessment;
- permissions and consent;
- related projects, goals, memories, documents, and events;
- contradiction status;
- supersedes/superseded-by relationships;
- correction, suppression, revocation, and deletion status.

## 7.2 Conceptual schema

```text
Memory
  id
  owner_id / tenant_id
  content
  memory_type
  scope_type + scope_id
  source_type + source_reference
  provenance_chain
  derived_from_ids
  original_context
  contextual_conditions
  created_at
  last_seen_at
  last_verified_at
  review_after / expires_at
  confidence + confidence_basis
  user_confirmed
  current_relevance
  lifecycle_state
  consent / permissions
  related_project_ids
  related_goal_ids
  related_memory_ids
  contradiction_group_id
  supersedes_id / superseded_by_id
  deleted_at / revoked_at
```

This is a semantic contract, not a final migration. Normalize high-value relationships into tables. Keep a JSON field only for flexible metadata, not as a substitute for queryable ownership, lifecycle, or provenance.

## 7.3 Lifecycle

```text
CAPTURED
  → CONTEXTUALIZED
  → ACTIVE
  → DORMANT
  → RETRIEVED
  → RE-EVALUATING
      ├─ RELEVANT → MAY INFLUENCE CURRENT WORK
      ├─ STALE → REMAIN DORMANT / REQUEST CONFIRMATION
      ├─ CONTRADICTED → CONFLICT REVIEW
      └─ OUT OF SCOPE → DO NOT INFLUENCE

Other terminal/side states:
CORRECTED / SUPERSEDED / REVOKED / DELETED / EXPIRED
```

Do not force all state transitions into one simplistic enum if separate review, deletion, and contradiction dimensions are clearer. Preserve the semantics even if the physical schema differs.

## 7.4 Retrieval and re-evaluation algorithm

**Proposed implementation:**

1. Authenticate the user and establish tenant/owner boundaries.
2. Parse the request into intent, task, project/goal, constraints, time horizon, and risk.
3. Retrieve candidate memories using structured filters first (owner, permission, scope, lifecycle), then hybrid ranking.
4. Score candidates using semantic similarity, lexical match, scope match, freshness, authority, confidence, and contradiction status.
5. Exclude deleted/revoked records and disallowed scopes before model context assembly.
6. Re-evaluate each candidate against the current task: same project? same person/entity? time-sensitive? contradicted? user-confirmed? still within scope?
7. For stale or ambiguous memories, ask the user or leave them dormant rather than silently relying on them.
8. Include the selected memory and its provenance in the reasoning context.
9. Keep a trace of what was retrieved, excluded, accepted, rejected, and why.
10. If a new candidate memory is proposed, apply capture policy and consent; do not automatically promote research or inference.
11. On user correction, update the canonical record and retain an audit/lineage event as appropriate.
12. On deletion, remove or tombstone canonical data and propagate deletion to indexes, caches, derived artifacts, and downstream stores according to the retention policy.

A high similarity score is not sufficient evidence that a memory applies.

## 7.5 Anti-poisoning and conflict policy

- Separate direct user statements, imported source facts, model inferences, and system-generated summaries.
- Record provenance and confidence basis.
- Detect possible contradictions and route them to re-evaluation.
- Do not allow background workers to silently promote pending memories or bypass user approval.
- Permit correction, suppression, expiration/review, and deletion.
- Keep low-confidence memory from silently driving high-impact recommendations or actions.
- Do not infer sensitive attributes or convert speculation into a durable personal fact.

## 7.6 Memory UX

Users should be able to:
- see what is remembered and why;
- inspect source, scope, confidence, lifecycle, and last verification;
- edit or correct a memory;
- mark it not relevant, suppress it, or keep it dormant;
- accept/reject proposed memories;
- pause learning;
- delete individual memories;
- export their data and request account deletion;
- understand when a memory influenced a recommendation.

---

# 8. Semantic object model

Keep these object types distinct:

| Object | Meaning | May it be automatically promoted? |
|---|---|---|
| Context | Current task/session/project conditions | Not a durable memory by default |
| Memory | Contextualized retained information | Only under capture/consent policy |
| Research / Evidence | Source-derived information with citations/provenance | No |
| Belief | A proposition the system tentatively accepts from evidence | No silent promotion |
| Pattern | A repeated relationship across observations | Requires evidence and confidence |
| Insight | A potentially useful interpretation or implication | Must retain derivation |
| Recommendation | Suggested next step based on context/evidence | Must be explainable and risk-aware |
| Action | A tool-mediated side effect | Must be authorized and audited |
| Outcome | Verified or reported result of an action/decision | Record source and verification level |
| Learning candidate | Proposed update from feedback/outcome | Re-evaluate before becoming durable knowledge |

Research can be processed by NEXUS without becoming memory, belief, pattern, insight, or recommendation. Each transformation should preserve `derived_from` links.

---

# 9. Intelligent Core and orchestration

The Intelligent Core answers: **What does the system need to know, who or what should handle this, what should happen next, and what should be remembered afterward?**

Required responsibilities:
1. Intent and task classification.
2. Active context assembly.
3. Memory retrieval and re-evaluation.
4. Evidence retrieval and source-quality checks.
5. Planning and decomposition.
6. Agent/skill routing.
7. Tool selection and permission checks.
8. Risk classification and approval policy.
9. Response or action generation.
10. Verification and evidence collection.
11. Outcome capture.
12. Feedback and learning-candidate creation.
13. Observability and explanation.

Before important actions, the orchestrator should resolve:
- goal and success condition;
- relevant context and memories;
- knowns, unknowns, and conflicting evidence;
- permitted tools and scopes;
- action risk and approval requirement;
- verification method;
- what, if anything, should be remembered afterward.

Use explicit contracts between modules. Keep model prompts out of authority boundaries: the server-side policy layer, not the language model alone, must enforce permissions and action constraints.

---

# 10. Specialist agent roles

The historical handoff defines these roles. Implement them as capabilities/roles first; use separate model instances only where justified.

- **Researcher** — finds and cites information.
- **Analyst** — decomposes evidence and identifies relationships.
- **Strategist** — develops options and trade-offs.
- **Skeptic** — stress-tests assumptions and searches for failure modes.
- **Creator** — creates drafts, designs, plans, code, and other artifacts.
- **Teacher** — explains concepts and adapts explanations.
- **Coach** — guides practice, reflection, and follow-through.
- **Operator** — executes approved, bounded tasks.
- **Scout** — monitors future events and emerging signals.
- **Archivist** — structures and organizes durable knowledge.
- **Guardian** — checks privacy, permissions, safety, provenance, and risk.
- **Conductor** — routes and coordinates work across roles.

Routing should be based on task requirements, not character theatre. A user should be able to see which role/capability was used when that information matters.

---

# 11. Work Graph, connected sources, NEXUS, and integrations

## 11.1 Work Graph

The Intelligence/Work Graph should represent relationships among:
- goals, projects, people, ideas, tasks, documents, memories, evidence, skills, agents, actions, outcomes, feedback, and insights.

Do not build a decorative graph UI before reliable relationship semantics exist. Start with relational tables and explicit edges; add graph visualization when it supports a real workflow.

## 11.2 Research/source ingestion

External source material is evidence, not automatically memory. For a repository source, preserve at least:
- provider and repository;
- owner/account and selected scope;
- branch/ref;
- commit SHA;
- file path;
- blob SHA or content hash;
- source URL;
- retrieval timestamp;
- chunk identifier and content hash;
- sync cursor/version and deletion status.

Ingestion should be incremental, deduplicated, permission-checked, and auditable. Avoid sending a full repository to a model when retrieval of relevant chunks is sufficient.

## 11.3 NEXUS

NEXUS is a downstream processing/reasoning layer that operates on research, source chunks, work items, and context. It should:
- accept deduplicated work events;
- process source material;
- create structured candidate outputs;
- preserve derivation/provenance;
- detect contradictions;
- route candidates for review;
- avoid automatic promotion into durable memory or recommendations.

## 11.4 Connector fabric

The 5.8 package documents OAuth adapters for Google, Microsoft, GitHub, Notion, Slack, and Linear. This is code-path evidence, not proof that live accounts are connected or that every action adapter is complete.

Connector requirements:
- server-side OAuth and token exchange;
- signed, persisted, expiring, one-time OAuth state;
- strict redirect allowlisting;
- encrypted token storage (the package documents AES-GCM);
- refresh-token rotation;
- separate authentication and HMAC-signing secrets;
- least-privilege scopes;
- explicit per-user connection and repository/resource selection;
- idempotent action dispatch;
- audit records;
- disconnect and token revocation;
- safe retries and dead-letter handling;
- no credentials or provider secrets in the browser.

Do not expose a connector action until its exact scope, risk class, approval requirement, and verification procedure are defined.

---

# 12. Governance, actions, and autonomy

Autonomy must be bounded by capability, user consent, risk, and reversibility.

## 12.1 Risk tiers (proposed)

- **Low:** read-only retrieval, summarization, draft generation. May proceed within authorized scopes.
- **Moderate:** reversible changes such as creating a draft or updating a non-critical record. Require explicit capability permission and a clear audit trail; confirm when user expectation is ambiguous.
- **High:** external communication, publication, financial/contractual commitments, destructive edits, or broad data changes. Require clear user approval immediately before execution.
- **Critical:** irreversible or highly consequential operations. Require explicit confirmation plus dedicated review/human escalation; default to no execution if policy or evidence is incomplete.

Exact tier mapping must be product-specific and reviewed before launch.

## 12.2 Action execution contract

Every action should have:
- actor and owner;
- capability identifier and version;
- target resource and scope;
- input schema and validation;
- idempotency key;
- risk tier;
- governance decision;
- approval reference if needed;
- execution lease/expiry;
- status and retry count;
- provider request/reference;
- result evidence;
- verification result;
- audit timestamps.

Use durable idempotency records to prevent duplicate side effects. Use leases and bounded retries; failed work should be inspectable and safely replayable. Do not treat “API returned 200” as proof the intended real-world outcome occurred.

---

# 13. Learning and feedback

Learning is a controlled loop, not automatic personalization from every exchange.

```text
OBSERVE → FORM CANDIDATE → CHECK CONSENT / POLICY
→ VALIDATE EVIDENCE → CHECK CONTRADICTIONS
→ USER REVIEW WHEN NEEDED → UPDATE OR DISCARD
→ MEASURE FUTURE EFFECT
```

Possible learning areas:
- stable preferences;
- project-specific preferences;
- skills and knowledge;
- learning gaps and retention;
- successful workflows;
- rejected/accepted recommendations;
- outcomes and corrections;
- recurring patterns.

The proposed **Learning Genome** is a future representation of knowledge, skills, gaps, interests, goals, learning behavior, confidence, retention, experience, projects, curiosity, and mastery. Treat it as a hypothesis to validate, not an MVP prerequisite.

Learning pause must be authoritative on the server. If the user pauses learning, candidate persistence and automatic learning must respect that preference across all relevant endpoints and workers.

---

# 14. Product modes and user experience

Historical product modes:
- **RESEARCH** — understand a topic.
- **THINK** — reason through a problem.
- **CREATE** — make an artifact.
- **LEARN** — build mastery.
- **BUILD** — turn an idea into a working thing.
- **DECIDE** — compare options and trade-offs.
- **RESCUE** — get unstuck.
- **WATCH** — monitor an event or condition.
- **EVOLVE** — improve the system/workflow.

Treat these as workflows or task presets, not separate products.

## 14.1 Command center

Historical working name: **ZIO COMMAND**. Current public name remains open. Core question:

> What are we working on?

Possible views:
- **NOW** — needs attention;
- **NEXT** — next actions;
- **PROJECTS** — active work;
- **MEMORY** — retained context;
- **INTELLIGENCE** — new evidence/insights;
- **AGENTS** — active tasks and role routing;
- **LEARNING** — reviewed learning candidates and progress;
- **EFFECT** — measurable impact and reduced friction.

## 14.2 First-run experience

1. Ask what the user is trying to accomplish.
2. Identify goal, context, constraints, knowledge gaps, and project scope.
3. Ask permission before creating durable memory.
4. Show what context/memories will be used and what is missing.
5. Offer a useful first action or structured plan.
6. Explain what can be done now versus what requires tools, permissions, or user approval.
7. Let the user inspect and correct the system’s understanding.

## 14.3 Signature demonstration

1. The user mentions something meaningful in one context.
2. The system preserves it with scope and provenance.
3. The original context ends; the memory becomes dormant if appropriate.
4. A related context returns later.
5. The system retrieves the memory, explains why it may apply, and re-evaluates freshness and scope.
6. It connects the memory to new evidence or a project.
7. It presents an insight or option with traceable support.
8. The user accepts, rejects, corrects, or ignores it.
9. The outcome feeds the learning review under the user’s settings.

This demo must show contextual recall—not simply “the model remembered a sentence.”

---

# 15. Visual and brand experience

The existing technical handoffs describe a **precision intelligence instrument**:
- calm, premium, editorial;
- ink-and-paper surfaces;
- hairline structure and crisp borders;
- one intelligent signal accent;
- light and dark modes;
- generous spacing for reflective work, tighter density for records;
- rounded but not playful surfaces;
- low shadows and quiet motion;
- strong hierarchy and legible typography;
- emphasis through structure rather than rainbow categorization.

Semantic visual grammar:
- nodes = knowledge;
- lines = relationships;
- pulses = active intelligence;
- rings = memory/context;
- orbits = agents;
- locks = trusted/permissioned information;
- signals = new insights;
- morphing structures = evolution.

Motion should correspond to real state: listening, retrieving, searching, connecting, uncertainty, verification, action, learning. Do not use animation to imply a process that did not occur.

Historical language direction: clear, intelligent, human, specific, restrained, calm, precise, curious, protective, quietly powerful. Avoid generic AI hype and perfect-memory claims. All historical copy that says “ZIO” or “Astara” must be reviewed before rebranding as ZYOVERSE/Zioren.

---

# 16. Technical state and version history

## 16.1 Historical lineage

The available Library contains:
- early XIO demos and website packages;
- XIO 4.x and 5.0 enterprise/hardening packages;
- ZIO 5.1–5.8 packages;
- a complete audit/fix package;
- ZIO/Astara builder handoffs and vision comparison briefs;
- a later naming research report;
- current project notes and design assets.

Treat version numbers as package lineage, not proof of the currently deployed version. Preserve all historical packages until the active source of truth is identified and backed up.

## 16.2 Architecture documented in ZIO 5.8

The 5.8 package documents:
- migrations 001–006;
- server-side connector runtime;
- managed secrets;
- separate connector-auth and HMAC-signing secrets;
- one-time signed/persisted/expiring OAuth state;
- OAuth code exchange and refresh adapters for six providers;
- AES-GCM encrypted connector-token persistence;
- durable action idempotency;
- leases, retry planning, and dead-letter primitives;
- durable provenance and governance decisions;
- contradiction detection and memory re-evaluation;
- hybrid retrieval contracts with explicit semantic-provider readiness;
- regression/fabric tests and strict TypeScript contract checks.

The package’s own production-readiness and release-gate files say that the following remain deployment gates:
- real secrets bound and verified in staging;
- migrations applied and rollback/restore tested;
- at least one real provider connection tested end-to-end;
- provider-specific action adapters and least-privilege scopes validated;
- real embeddings/vector service configured and benchmarked;
- indexed/paginated database access verified for production scale;
- distributed WAF/rate limiting/circuit breaking and centralized tracing;
- high/critical approval and human escalation;
- replay, key-rotation, adversarial-security tests;
- backup/restore and disaster recovery;
- verified billing webhooks if billing is enabled.

Therefore: **do not call the system production-ready merely because the package has production-oriented code or a passing local test report.** Production readiness requires deployment evidence.

## 16.3 Audit findings from 2 September 2026

The complete audit package identified a critical split in an earlier generation: the XIO 5.0 frontend was largely localStorage-driven while the backend was a separate authenticated intelligence layer. The repair restored a cloud bridge, authenticated sign-in path, boot hydration, server turn path, memory decisions, event synchronization, and a reset path. The audit also corrected a background-learning path that could silently promote pending memories, and it made learning preferences authoritative.

The audit explicitly left these as incomplete rather than pretending they were finished: Work Graph backend, Shadow persistence/execution, full OAuth connector lifecycle in that generation, provider adapters, verified billing webhooks, high-scale indexed tenant queries, evidence-backed Effect service, and the complete outcome-to-learning loop.

A separate handoff recorded past Vercel/AppDeploy build issues. Those are historical observations and must be checked against the active branch before editing; do not assume they remain present.

## 16.4 Current-state caution

The exact active repository, branch, deployment, database schema, and provider configuration were not live-verified as part of this document. The handoff references repository `aries306/Xioeffect`, a Neon project named `xio-db`, and multiple deployments, but these are historical references and must be rechecked. Do not delete repositories, databases, deployments, or old versions until the current state is inventoried, backed up, and explicitly approved for retirement.

---

# 17. Data model inventory (logical)

The following entities should exist in the logical model. Final table names and normalization should be derived from the current migrations and repository, not invented in parallel.

## Identity and policy
- users / tenant ownership
- user preferences
- consent and learning settings
- entitlements/subscription state
- connected accounts and scopes
- audit events

## Conversation and context
- conversations
- messages
- sessions
- active context snapshots
- projects
- goals
- tasks/work items

## Memory and knowledge
- memories
- memory revisions/history
- memory relationships
- provenance records
- evidence/source records
- source documents and chunks
- research records
- beliefs
- patterns
- insights
- recommendations
- contradiction records
- learning candidates

## Orchestration and execution
- agent/task runs
- plans/steps
- tool/capability registry
- governance decisions
- approvals
- action executions
- idempotency records
- execution leases
- retries/dead letters
- outcome verification
- user feedback

## Integration and operations
- connector accounts/tokens
- OAuth state
- sync cursors
- source ingestion jobs
- webhook events
- configuration readiness
- metrics/traces
- billing events if billing is enabled

Every tenant-owned record must have a reliable ownership boundary. Use foreign keys and database constraints where practical, and enforce authorization in server routes as well as query filters.

---

# 18. API and service boundaries (proposed)

Define explicit, versioned service contracts. Names below are illustrative; map them to the existing repository before implementing.

- `POST /intelligence/turn` — authenticated user request; returns response plus structured recommendations/insights and trace metadata.
- `POST /memory/candidates` — proposes a memory candidate; does not silently promote it.
- `GET /memories` — lists the authenticated user’s memories with scope/lifecycle filters.
- `PATCH /memories/:id` — edits/corrects a memory after ownership and validation checks.
- `POST /memories/:id/decision` — accept, reject, suppress, or request review.
- `DELETE /memories/:id` — delete/tombstone and propagate deletion to derived stores.
- `POST /outcomes` — records accept/reject/correction/result feedback.
- `POST /sources/:provider/sync` — starts an authorized source sync.
- `POST /actions/:capability/execute` — governed action request with idempotency key and approval reference.
- `GET /system/readiness` — safe readiness booleans only; never disclose secret values.
- `POST /learning/pause` / `POST /learning/resume` — server-authoritative learning setting.

For every endpoint specify authentication, ownership, entitlement, rate limits, request/response schemas, idempotency, audit events, error contract, and tests. Preserve existing frontend/mobile API contracts unless an explicit migration is planned.

---

# 19. Security, privacy, and data governance

Treat personal memory as sensitive infrastructure.

Minimum design requirements:
- TLS for transport and encryption at rest;
- least-privilege access;
- strict tenant isolation;
- server-side secrets only;
- secure OAuth state and redirect allowlists;
- encrypted provider tokens and key rotation;
- explicit connector scopes;
- audit trail for memory decisions and tool actions;
- safe logging that excludes tokens and unnecessary personal data;
- user inspection, correction, export, deletion, and learning pause;
- retention/expiration policy;
- deletion propagation to search indexes, caches, and derived artifacts;
- backups and tested restoration;
- rate limits, abuse controls, and anomaly monitoring;
- high-impact action approval and escalation;
- incident response and access revocation.

Determine legal and compliance requirements from the target markets, data categories, customers, and business model. Do not claim compliance (including privacy/security certifications) solely because controls exist in code.

---

# 20. Testing and acceptance criteria

## 20.1 Contextual Memory MVP tests

1. **Capture consent:** no durable memory is created when policy/consent says not to.
2. **Cross-context recall:** a relevant memory can be retrieved after the original conversation ends.
3. **Dormancy:** irrelevant memories stay dormant.
4. **Scope:** a project-specific memory does not become a global preference.
5. **Provenance:** the user can inspect the original source and derivation.
6. **Confidence:** confidence is represented separately from truth and user confirmation.
7. **Staleness:** old time-sensitive memories are re-evaluated or confirmed.
8. **Contradiction:** conflicting information creates a review/re-evaluation path.
9. **Correction:** user corrections update the canonical record and future retrieval.
10. **Deletion:** deleted memories do not reappear from vector indexes, caches, or derived outputs.
11. **Learning pause:** pause is enforced server-side across endpoints/workers.
12. **Tenant isolation:** user A cannot read, modify, or infer user B’s data.
13. **Explainability:** the system can say why a memory was used or excluded.
14. **No silent promotion:** research and inferred candidates do not become durable memory without policy approval.
15. **Failure safety:** unavailable embedding/provider services trigger an honest fallback, not a false claim of semantic retrieval.

## 20.2 Orchestration and action tests

- correct intent and specialist routing;
- tool permission denied when scope is missing;
- high/critical action approval enforced server-side;
- duplicate requests do not duplicate side effects;
- expired leases cannot execute;
- retry/backoff and dead-letter behavior works;
- connector token refresh and revocation are handled;
- OAuth state replay is rejected;
- outcome verification distinguishes provider acceptance from real outcome;
- failed verification creates a review path;
- audit events link request, decision, execution, evidence, and result.

## 20.3 Release gates

A release is not production-ready until:
- migrations have been applied and rollback/restore drills pass;
- staging uses real secret management;
- at least one real connector is tested end-to-end;
- database indexing/pagination is validated at expected scale;
- embeddings/vector retrieval are configured and benchmarked or lexical-only mode is explicitly disclosed;
- high-impact governance and human escalation are tested;
- security, replay, key rotation, and adversarial tests pass;
- backup/restore and disaster recovery are proven;
- monitoring, tracing, rate limits, and incident procedures are operational;
- billing is either disabled honestly or its webhooks are verified.

---

# 21. Build plan and dependency order

Build complete functional units in dependency order. Inspect the current repository and tests before editing. Do not perform broad rewrites before establishing a baseline.

## Phase 0 — Source-of-truth checkpoint
- identify the canonical repository, branch, deployment, database, and owner;
- inventory all packages and versions;
- preserve current production state and backups;
- run baseline tests/build/typecheck;
- document known failures and which package is authoritative;
- map old names (XIO/ZIO/Astara/NEXUS) to current product terms without mass-renaming prematurely.

**Exit:** reproducible baseline and rollback path.

## Phase 1 — Identity, context, and Contextual Memory MVP
- authentication and tenant isolation;
- conversation/project/goal context;
- structured memory records and provenance;
- scope, confidence, lifecycle, dormancy;
- hybrid retrieval with honest fallback;
- re-evaluation before influence;
- inspect/edit/correct/delete/export;
- consent and learning pause;
- end-to-end acceptance tests.

**Exit:** the signature cross-context memory test passes.

## Phase 2 — Evidence and Research Fabric
- source registry and connector permissions;
- incremental ingestion and deduplication;
- source chunks and provenance;
- lexical retrieval plus real semantic retrieval;
- freshness/authority scoring;
- Research records kept separate from Memory;
- NEXUS candidate processing with derivation links.

**Exit:** source-to-evidence lineage is inspectable.

## Phase 3 — Intelligent Core
- intent classification;
- context assembly;
- retrieval/re-evaluation;
- planning and response contracts;
- agent/capability routing;
- verification and observability;
- outcome feedback loop.

**Exit:** a request can be traced from intent through context, evidence, reasoning, response, and outcome.

## Phase 4 — Governed connector/action runtime
- OAuth state and token lifecycle;
- least-privilege provider scopes;
- capability registry;
- governance and approvals;
- idempotency, leases, retry/backoff, dead letters;
- outcome verification;
- staging integration tests.

**Exit:** one real provider workflow completes safely end-to-end.

## Phase 5 — Work Graph and specialist roles
- explicit entities/relationships;
- task/agent run records;
- Conductor routing;
- Researcher, Analyst, Strategist, Skeptic, Creator, Operator, Guardian;
- user-visible run status and provenance.

**Exit:** multi-step workflows can be inspected and resumed safely.

## Phase 6 — Learning and evolution
- learning candidates;
- feedback and outcome quality;
- contradiction handling;
- preference/workflow learning;
- optional Learning Genome after validating user value;
- measurement of retention, corrections, and useful recall.

**Exit:** learning changes behavior measurably without violating consent or trust rules.

## Phase 7 — Command center, mobile, and brand migration
- unified command experience;
- project workspaces;
- memory and relationship views;
- mobile compatibility;
- naming migration after legal/owner approval;
- visual language and website alignment.

**Exit:** consistent product experience, no broken API contracts, and approved naming.

## Phase 8 — Commercial and operations readiness
- pricing and entitlement rules;
- billing only with verified webhooks;
- support, incident response, retention policy;
- backup/restore and disaster recovery;
- legal/privacy review;
- launch readiness review.

**Exit:** operational, legal, and product release gates are explicitly green.

---

# 22. Build discipline for every implementation task

1. **Inspect before editing:** current files, migrations, route contracts, tests, deployment config, and source-control state.
2. **Define the unit:** state the user-visible outcome and acceptance tests.
3. **Respect dependency order:** schema and contracts before service logic; service logic before UI; UI before end-to-end integration.
4. **Preserve compatibility:** do not break mobile/frontend contracts without an approved migration.
5. **Keep secrets out of code and client bundles.**
6. **Implement the complete functional unit:** avoid placeholder success responses or fake integrations.
7. **Test at the correct level:** unit, contract, regression, typecheck, build, and staging integration as appropriate.
8. **Report evidence accurately:** distinguish tests run locally from live staging checks.
9. **Track remaining gaps:** maintain a release gate and update the source-of-truth document.
10. **Preserve rollback:** do not delete or overwrite production assets without a checkpoint and explicit approval.

This is a project workflow preference. It does not require exposing private chain-of-thought; deliver design decisions, evidence, tests, and concise rationale.

---

# 23. Commercial, ownership, and IP track

Project context includes an owner intention to sell or transfer the broader ZYOVERSE company/project while retaining **20% of revenue** and intellectual-property rights. These goals may conflict depending on whether the transaction is an asset sale, share sale, exclusive licence, assignment with licence-back, or another structure. A prior draft was framed as a Canadian business sale and IP assignment with a continuing revenue share, but that is not legal advice and should not be treated as settled.

Before negotiating or signing, have a Canadian business/IP lawyer and tax professional define:
- what is being sold (shares, assets, code, brand, domains, data, rights, goodwill);
- which IP rights are assigned, licensed, retained, or licensed back;
- whether the 20% is gross revenue, net revenue, receipts, a defined product line, or another base;
- deductions, reporting, audit rights, payment timing, currency, taxes, refunds, chargebacks, affiliate revenue, bundles, and successor products;
- term, territory, exclusivity, sublicensing, change of control, and termination;
- treatment of future improvements, derivative works, and open-source dependencies;
- warranties, indemnities, liability limits, and dispute resolution;
- how retained rights coexist with an outright transfer;
- whether the buyer can continue using the IP if revenue share is disputed.

Do not encode this commercial arrangement into product architecture until the legal and business terms are decided. Keep it as a separate workstream from the software build.

---

# 24. Open decisions register

These decisions must be resolved or explicitly deferred. They are not reasons to block the Contextual Memory MVP unless they affect its implementation.

1. **Canonical brand map:** Is ZYOVERSE only the umbrella universe, or also the software company/product? What is the final relationship between ZYOVERSE, Zioren, Auren, Solyn, and the historical ZIO/Astara/NEXUS terms?
2. **Legal name clearance:** Which public names have completed CIPO/EUIPO/WIPO, app-store, social, domain, and linguistic checks?
3. **Canonical repository:** Which repo/branch is the source of truth now? Is `aries306/Xioeffect` still current?
4. **Canonical runtime:** AppDeploy, Vercel, or another deployment target? Avoid operating multiple competing versions without clear ownership.
5. **Database:** Is the referenced Neon `xio-db` project still authoritative? Which migrations have been applied in each environment?
6. **Authentication:** Is Clerk still the chosen identity provider, or has the current application moved to another auth system?
7. **Memory consent policy:** Which memory types require explicit confirmation, and which can be proposed for review?
8. **Retention:** What are default review/expiry windows for time-sensitive memories and source content?
9. **Sensitive data policy:** Which categories are never stored, never inferred, or require special consent?
10. **Embedding provider:** Which provider and vector/index strategy will be used? What is the lexical-only fallback?
11. **Connector scope:** Which providers and exact read/write actions are in MVP?
12. **Autonomy policy:** Which action classes require approval, and what qualifies as critical?
13. **Mobile compatibility:** Which existing clients/API contracts must remain supported?
14. **Billing:** Is billing in the MVP? If yes, which provider and webhook verification design?
15. **Commercial structure:** What precisely is the proposed 20% revenue share and what IP rights are retained?
16. **Product scope:** Is fictional-world/franchise content part of the same deliverable or a separate creative track?

---

# 25. Immediate next actions

The highest-leverage next step is **a source-of-truth technical checkpoint**, not another feature sprint.

1. Open the canonical repository and record commit SHA, branch, deployment URL, database project, and active environment.
2. Run the existing test suite, typecheck, and production build without changing files.
3. Compare the current source against the 5.8 package and the latest builder handoff; identify which code actually runs.
4. Verify migrations 001–006 against staging and production before applying anything.
5. Create a gap matrix with columns: requirement, current implementation, evidence/test, gap, owner, release phase.
6. Build Phase 1 only after the baseline and data ownership boundaries are verified.
7. Keep naming and commercial decisions tracked separately; do not block core engineering on cinematic branding.

---

# 26. Portable handoff instructions for a new team

Give the receiving team this document and the original source archives. Ask them to:

1. Read this master specification and the latest ZIO/Astara builder handoff.
2. Inspect the current repository, not just the ZIP packages.
3. Identify the actual deployed version and reconcile historical generations.
4. Preserve current assets and establish rollback.
5. Produce an implementation-vs-spec gap matrix with file paths and test evidence.
6. Propose a dependency-ordered plan before making broad changes.
7. Implement the Contextual Memory MVP first.
8. Report every assumption, unresolved decision, test result, and external deployment gate.
9. Never claim an integration, compliance status, semantic search capability, or production readiness without evidence.
10. Keep the master specification versioned and update it as decisions are made.

## Core acceptance test

A user can tell the system something important in one context, leave that context, and return later in a related context. The system retrieves the memory, shows where it came from, explains why it may be relevant, checks whether it is still applicable, detects conflict or staleness, and only then decides whether it should influence the current work. The user can inspect, correct, suppress, or delete it. The system does not silently promote unrelated research or inference into memory.

If this test does not pass end-to-end, the core product thesis has not yet been proven.

---

# Appendix A. Key source materials reviewed

The following source materials informed this consolidation. Historical naming in filenames is retained for traceability.

1. `ZIO_ASTARA_BUILDER_HANDOFF.md` — foundational product vision, system model, Memory Fabric, roles, product modes, schema concepts, trust rules, build phases.
2. `ZIO_Astara_AI_Builder_Handoff.md` — current implementation notes, frontend behavior, source inventory, design direction, implementation constraints and caveats.
3. `ZIO_Astara_Vision_Comparison_Brief.md` — original vision versus current technical direction; identity, Neon/Postgres, Clerk, research, NEXUS, and source provenance.
4. `ZIO_Astara_Project_Handoff.zip` — product vision, architecture, current state, build strategy, comparison rubric, handoff prompt.
5. `ZIO-5.8-PRODUCTION-AUTONOMOUS-FABRIC.zip` — architecture 5.8, migrations 001–006, connector runtime, provenance, governance, production-readiness report, release gate, and regression/fabric tests.
6. `ZIO-COMPLETE-AUDIT-PACKAGE-FIXED.zip` — audit/fix report and preserved earlier generations; documents frontend/backend divergence and what remained incomplete.
7. `Pasted markdown.md` (30 September 2026 naming research) — preliminary candidate screening and explicit legal/linguistic clearance gaps.
8. `Pasted text(1).txt` — Baldwin v67 build-discipline source; used only for the inspect-first, dependency-ordered, verified-build workflow preference.
9. Recent project context dated 30 September–2 October 2026 — current spelling ZYOVERSE, tentative brand architecture, and commercial/IP intent.

## Coverage limitation

This is a consolidated source-of-truth specification, not a forensic audit of every file in every archive or a live audit of the current hosted application. Several historical ZIPs contain overlapping generations and bundled archives. Before implementation, inspect the canonical repository and compare it with this document; treat any code/package claim as historical until verified against the active branch and staging environment.
