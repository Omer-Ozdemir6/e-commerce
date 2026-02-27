import BlogCard from './BlogCard';

const posts = [
  {
    id: 1,
    tag: "New",
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10",
    image: "/post-3.jpg" 
  },
  {
    id: 2,
    tag: "New",
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10",
    image: "/post-2.jpg"
  },
  {
    id: 3,
    tag: "New",
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10",
    image: "/post-1.jpg"
  }
];

export default function FeaturedPosts() {
  return (
    <section className="py-20 px-4 md:px-20 bg-white">
      <div className="container mx-auto">

        <div className="text-center mb-20">
          <h6 className="text-[#23A6F0] font-bold text-sm mb-2">Practice Advice</h6>
          <h2 className="text-[#252B42] text-4xl font-bold mb-3 uppercase">Featured Posts</h2>
          <p className="text-[#737373] text-sm max-w-md mx-auto">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}