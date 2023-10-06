# AWS Responsible AI Best Practices

## Responsible AI Best Practices: Promoting Responsible and Trustworthy AI Systems

[Tom Godden](https://www.linkedin.com/in/tomgodden/): Enterprise Strategist and CxO Advisor at Amazon Web Services (AWS) | CIO | CTO

[Responsible AI Best Practices: Promoting Responsible and Trustworthy AI Systems | AWS Cloud Enterprise Strategy Blog (amazon.com)](https://aws.amazon.com/blogs/enterprise-strategy/responsible-ai-best-practices-promoting-responsible-and-trustworthy-ai-systems/)

The emergence of generative AI has brought about transformative possibilities and the potential to benefit how we work, live, and interact with the world. However, it is crucial to recognize the responsibility that comes with such powerful technology.

When I speak to executives today, there is a lot of enthusiasm and excitement to get started with AI—and even more so with generative AI. But they often ask, “How can I do it in a responsible, safe way that delivers the best experience for my customers?” And this is an important question, especially as we see new challenges arise with generative AI.

In this blog post, I will share a few considerations and best practices for responsible AI that emphasize fairness, transparency, accountability, and privacy—and steps executives, board members, and leaders should consider for building responsibly as they adopt this exciting new technology and embark on innovation.

### Responsible AI in the Era of Generative AI

Generative AI, with its increased power and growing accessibility, presents exciting opportunities for innovation, advancement, and the ability to achieve remarkable outcomes. However, these same exciting opportunities call for greater responsibility to better understand and address potential biases and harms. Just recently, AWS joined the White House, policymakers, technology organizations, and the AI community to advance the responsible and secure use of AI with voluntary commitments, recognizing the need to work together to develop future generative AI models safely and responsibly.

Responsible AI best practices are crucial in promoting the responsible, transparent, and accountable use of AI systems. As AI technologies continue to advance and permeate our lives, it is imperative to establish guidelines and frameworks that promote responsible AI adoption. These best practices should address the potential risks, biases, and societal impacts associated with AI while harnessing its transformative potential to benefit individuals, organizations, and society.

These nine responsible AI best practices extend beyond technical aspects and focus on the organizational and cultural dimensions of AI adoption. They emphasize the need for leadership commitment, cross-functional collaboration, and ongoing education and awareness programs to promote a culture of responsible AI within organizations.

### Taking a People-Centered Approach

**1. Build a Diverse and Multidisciplinary Team**

To determine necessary policies and strategies, it is best to assemble a team with diverse expertise, including AI specialists, data scientists, ethicists, legal professionals, and domain experts. The team should have a well-rounded understanding of AI technologies, responsible considerations, legal frameworks, and the specific domains in which the AI is deployed. This multidisciplinary approach ensures a holistic perspective and comprehensive understanding of AI’s implications. This team plays a key role in shaping and implementing responsible AI thinking in any organization.

It is important to remember that responsible AI is not the exclusive jurisdiction of a single entity or group; it is a collaborative effort that requires the active involvement and commitment of all stakeholders involved in the AI ecosystem.

**2. Prioritize Education**

Education on responsible AI practices must go beyond AI developers and data scientists to encompass employees, stakeholders, and the wider community. Educational programs should focus on raising awareness of responsible AI considerations, potential risks, and best practices, including responsible AI policies and procedures. Special focus should be placed on providing training in bias mitigation, privacy protection, explainability of AI systems, and the responsible use of AI technologies.

Furthermore, I recommend creating an internal resource that includes guidelines, best practice documents, case studies, and examples of responsible AI implementation. Make these resources easily accessible and regularly update them to reflect the evolving landscape of responsible AI. There are helpful resources available [here](https://aws.amazon.com/machine-learning/responsible-machine-learning/).

**3. Balance AI Capabilities with Human Judgment**

Generative AI techniques can create highly realistic content, including text, images, and videos. But AI can also generate outputs that appear plausible but are verifiably incorrect. You may have seen the recent [press coverage](https://mashable.com/article/chatgpt-lawyer-made-up-cases) about generative AI citing non-existent cases for a lawyer using it to prepare a legal brief. These hallucinations can occur due to factors like over-optimization, data biases, limited contextual understanding, and insufficient or outdated training data.

While AI systems offer unparalleled capabilities to streamline processes and enhance efficiency, strong consideration should be given to human judgment. Humans possess essential qualities such as broad knowledge, causal reasoning, empathy, compassion, and contextual understanding, which may be crucial in complex and high-risk decision-making scenarios. It is important to strike the right balance between AI capabilities and human judgment to promote the responsible use and deployment of applications involving AI.

You should consider the appropriate level of human involvement based on the criticality and complexity of the AI system’s decisions. This involvement could include human-in-the-loop, where humans play an active role in the decision-making process alongside the AI system; human-on-the-loop, where humans have oversight and control over the AI system but are not actively involved in the decision-making process in real time; or human-over-the-loop approaches, where humans are responsible for the ultimate decision-making authority and control over the AI system.

### Identify New Mechanisms and Techniques to Mitigate Bias and Foster Transparency

**4. Mitigate Bias**

Generative AI models are trained on vast amounts of data. When bias is introduced into foundation models or training data, it can be amplified and perpetuated in the generative outputs, leading to unfair implementation, perpetuating stereotypes, and limiting diversity and representation if left unchecked. Biases can arise if the training data is skewed, has a disparity in sample size, or lacks diversity in relevant features.

Mitigating bias in AI requires a two-fold approach. First, organizations should prioritize using diverse and representative data during AI model training. Incorporating representative datasets encompassing a wide range of perspectives, backgrounds, and demographics can help mitigate bias. Second, it is crucial to implement bias mitigation techniques throughout the development and deployment of AI systems. This includes preprocessing data to mitigate biases and implementing postprocessing techniques to promote fair and calibrated AI outputs.

**5. Foster Transparency and Explainability**

Generative AI models can be complex, and it can be difficult to understand how a model arrives at an output. You should consider when to disclose to your end users that they are using generative AI. Likewise, is important to consider when you may need to be able to explain how a generative AI model arrived at an output.

Focus on mechanisms to promote appropriate processes related to model development and deployment, which may include model architecture, summaries of input data, training processes, and decision-making mechanisms. Utilize interpretable algorithms and techniques, such as decision trees or rule-based systems, to enhance understanding of how a model works. This can involve techniques such as feature importance analysis, attention mechanisms, or saliency maps that highlight the most influential factors contributing to the model’s output.

**6. Test, Test, Test**

Continuous testing and evaluation are necessary to ensure the effectiveness of a responsible AI program. Make sure this testing includes both the model and the model with the dataset you used to train it. When evaluating responsible AI practices, consider metrics that assess fairness by measuring disparities or biases in outcomes across different demographic groups. Furthermore, gauge user satisfaction and trust in AI systems through surveys, feedback mechanisms, or user experience evaluations. Consider where it is appropriate to document and communicate these findings with stakeholders to drive improvements in a responsible AI program.

### Introduce Key Safeguards and Guardrails to Minimize Risk and Protect Privacy

**7. Incorporate Privacy Considerations**

Generative AI relies on large datasets for training models. It is important to implement best practices around handling personal data, including during training and anonymization techniques, to help minimize risk. You should also consider applicable privacy laws and regulations, including data collection, processing, and usage restrictions, and incorporate privacy considerations into any AI governance framework.

**8. Define Specific Application Use Cases**

It may be tempting to use generative AI in a broad manner or even as a catchall to answer a broad base of endless open-ended questions. However, I encourage AWS customers to instead define high-value specific application use cases focused on specific business needs. Specific application use cases allow for clearer accountability and ownership, provide easier transparency, and simplify risk assessment and mitigation. This also allows for more targeted testing, monitoring, and error-handling procedures.

**9. Protect and Respect Intellectual Property**

The rise of generative AI introduces complex intellectual property (IP) challenges such as copyrights in inputs, outputs, and the models themselves, ownership of AI-generated content, and trade secret protection. The autonomous nature of generative AI models, which independently create content, has blurred the lines of traditional creatorship and ownership. As a result, the use of generative AI requires careful consideration of IP legal frameworks to promote the appropriate use of inputs and outputs.

Safeguarding proprietary algorithms, techniques, or processes used in AI systems as trade secrets is essential and requires robust security measures to prevent unauthorized access or disclosure of confidential information. Additionally, it is important that you understand the dataflow of a given model, ensure it is safe, and that your inputs will not be shared with a 3P in a way you do not want.

### Conclusion

Taking the steps to build AI responsibly is crucial for harnessing the potential of AI while promoting responsible and fair outcomes. Executives have an opportunity to lead their organizations into the next decade of AI innovation while promoting safe, trusted AI. By following the principles of transparency, fairness, accountability, and privacy while addressing biases, organizations can harness the full potential of generative AI while building trust, promoting social good, and mitigating risks associated with AI systems.