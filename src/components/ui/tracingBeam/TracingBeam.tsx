import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./tracing-beam";
import { cn } from "../../../utils/cn";

export function TracingBeams() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black dark:bg-white dark:text-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={cn("text-xl mb-4 dark:text-white")}>{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert dark:text-white">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Unwavering commitment to perfection",
    description: (
      <>
        <p>
          "Product Design & Ideation: Unwavering Commitment to Perfection"
          encapsulates a holistic and meticulous approach to creating products
          that not only meet but exceed user expectations. This philosophy
          centers on a relentless pursuit of excellence, where every aspect of
          product development is scrutinized and optimized for the ultimate user
          experience.
        </p>
        <p>
          User-Centric Design: At the heart of this approach is a deep
          understanding of the user's needs, preferences, and challenges. By
          prioritizing the user at every stage of the design process, products
          are crafted to provide intuitive, engaging, and fulfilling
          experiences.
        </p>
        <p>
          Innovative Ideation: Innovation is the cornerstone of perfection. This
          involves a continuous process of ideation, where creativity and
          out-of-the-box thinking are encouraged. It's about looking beyond the
          conventional to discover new ways to solve problems, enhance
          functionality, and delight users.
        </p>
        <p>
          Rigorous Testing and Feedback Loops: An unwavering commitment to
          perfection means constantly testing, learning, and iterating. This
          iterative process involves seeking feedback from real users,
          identifying areas for improvement, and refining the product until it
          meets the highest standards of quality and performance.
        </p>
        <p>
          Implementation: Implementing this philosophy involves adopting a
          mindset where good enough is never enough. It requires a culture that
          values continuous improvement, embraces failure as a learning
          opportunity, and is passionate about making a difference in the lives
          of users. By committing to this rigorous and thoughtful approach,
          product designers and teams can create innovative, impactful, and
          truly perfect products.
        </p>
      </>
    ),
    badge: "Product Design & Ideation",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Augmenting the mobile experience for your users",
    description: (
      <>
        Augmenting the Mobile Experience for Your Users" emphasizes the
        enhancement and enrichment of the user's interaction with mobile
        applications. This approach prioritizes not just the functional aspects
        of app development but also focuses on creating more immersive,
        intuitive, and personalized user experiences. Here’s how you can
        implement and embody this philosophy in mobile app development:
        <p>
          User-Centered Design: Prioritize the needs, preferences, and behaviors
          of your target audience. Design your app with a user-first mentality,
          ensuring that navigation is intuitive, content is easily accessible,
          and interactions feel natural. Utilize user feedback and analytics to
          continuously refine and improve the user experience.
        </p>
        <p>
          Personalization: Leverage data and analytics to offer personalized
          experiences to your users. This can range from customized content and
          recommendations to personalized notifications and user interfaces.
          Personalization enhances user engagement by making them feel uniquely
          valued and understood.
        </p>
        <p>
          Seamless Performance: Optimize your app’s performance to ensure fast
          load times, smooth transitions, and responsive interactions.
          Performance is a key component of the user experience, and optimizing
          it can significantly reduce frustration and increase user
          satisfaction.
        </p>
        <p>
          Implementation Strategy: Iterative Development: Adopt an agile
          development process, where you can quickly iterate based on user
          feedback and changing requirements. User Testing: Conduct regular user
          testing sessions to gather insights into user behavior and
          preferences. This can help identify pain points and areas for
          improvement. Analytics: Use analytics tools to track user engagement,
          retention, and other key metrics. Analyze this data to make informed
          decisions about future updates and enhancements. By focusing on
          augmenting the mobile experience, developers and designers can create
          apps that not only meet the basic needs of users but also exceed their
          expectations, fostering loyalty and driving engagement.
        </p>
      </>
    ),
    badge: "Mobile App Development",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Maximizing capabilities by strengthening technology",
    description: (
      <>
        <p>
          Digital Transformation involves integrating digital technology into
          all areas of a business, fundamentally changing how it operates and
          delivers value to customers. It's not just about adopting new tech but
          rethinking business models, processes, and customer interactions for
          the digital age. Key elements include enhancing customer experiences
          through digital platforms, using data analytics for informed
          decision-making, improving operational efficiency with automation, and
          ensuring data security. The goal is to make businesses more agile,
          innovative, and better equipped to respond to changing market demands
          and customer needs. Successful digital transformation requires strong
          leadership, a customer-centric approach, continuous learning, and a
          culture that embraces change.
        </p>
      </>
    ),
    badge: "Digital Transformation",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
