<!--
Sync Impact Report:
- Version change: N/A -> 1.0.0
- Modified principles: All (newly defined)
- Added sections: Key Standards, Constraints and Success Criteria
- Removed sections: None
- Templates requiring updates:
    - .specify/templates/plan-template.md: ✅ updated
    - .specify/templates/spec-template.md: ✅ updated (no changes needed)
    - .specify/templates/tasks-template.md: ✅ updated (no changes needed)
    - .gemini/commands/sp.adr.toml: ✅ updated (no changes needed)
    - .gemini/commands/sp.analyze.toml: ✅ updated (no changes needed)
    - .gemini/commands/sp.checklist.toml: ✅ updated (no changes needed)
    - .gemini/commands/sp.clarify.toml: ✅ updated (no changes needed)
    - .gemini/commands/sp.constitution.toml: ✅ updated (no changes needed)
    - .gemini/commands/sp.git.commit_pr.toml: ✅ updated (no changes needed)
    - .gemini/commands/sp.implement.toml: ✅ updated (no changes needed)
    - .gemini/commands/sp.phr.toml: ✅ updated (no changes needed)
    - .gemini/commands/sp.plan.toml: ✅ updated (no changes needed)
    - .gemini/commands/sp.specify.toml: ✅ updated (no changes needed)
    - .gemini/commands/sp.tasks.toml: ✅ updated (no changes needed)
- Follow-up TODOs: None
-->
# AI/Spec-Driven Book Creation: Physical AI & Humanoid Robotics (Docusaurus) Constitution

## Core Principles

### I. Technical Accuracy
All content, code snippets, and hardware specifications must be factually correct and aligned with the official documentation for ROS 2, Gazebo, NVIDIA Isaac, and Docusaurus.

### II. Step-by-Step Pedagogy
The content must be structured to facilitate student learning, moving from core concepts to practical implementation, as detailed in the four modules.

### III. Consistency
Maintain a consistent professional/academic tone suitable for a university-level capstone course. Use standardized terminology (e.g., always use 'ROS 2' not 'ROS 2.0').

## Key Standards

- **Output Format**: All content must be in clean, valid *Markdown (MDX)* syntax, ready for direct inclusion into a Docusaurus documentation structure.
- **Structure Mandate**: The book must adhere strictly to the user-provided structure: [Introduction/Setup] -> [Module 1] -> [Module 2] -> [Module 3] -> [Module 4].
- **Chapter Granularity**: Each Module must be broken down into logically sequenced chapters with high-level, detailed, and accurate content (as demonstrated in the Chapter 1 reference).
- **Code Integrity**: All code examples (e.g., Python rclpy nodes, URDF snippets) must be complete, syntactically correct, and use appropriate Markdown code blocks with language highlighting.
- **Visualization Tagging**: For complex concepts (e.g., ROS 2 computation graph, URDF structure, Sim-to-Real workflow), embed *Diagram Tags* for instructional value.

## Constraints and Success Criteria

### Constraints
- **Technology Stack**: Content generation must focus exclusively on: *ROS 2 Humble/Iron, **Python 3.10+ (rclpy), **Gazebo, **Unity (for visualization/HRI), **NVIDIA Isaac Sim/ROS, and **LLM/VLA integration (OpenAI Whisper/GPT)*.
- **Exclusion**: Do NOT include content on the legacy *ROS 1* platform, except for brief explanatory context on why ROS 2 is superior, if necessary.
- **Deployment**: All final content must be compatible with Docusaurus and deployment to GitHub Pages (e.g., no external file dependencies outside of the defined project structure).

### Success Criteria
- The generated Docusaurus Markdown files align perfectly with the required Module/Chapter hierarchy.
- Content is technically accurate and complete for all core concepts in the *Weekly Breakdown*.
- Visualization tags are strategically placed to enhance understanding of complex systems.

## Governance
This Constitution defines the core principles and operational guidelines for the project. All work, including design, development, and documentation, must adhere to these tenets. Any proposed amendments to this Constitution must be formally documented, approved by the project leads, and include a clear migration plan for existing work. Compliance with these rules will be regularly reviewed, and significant deviations will require immediate corrective action.

**Version**: 1.0.0 | **Ratified**: 2025-12-10 | **Last Amended**: 2025-12-10