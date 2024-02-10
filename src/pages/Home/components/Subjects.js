import { BlogCard } from '../../Blog/BlogCard';

export const Subjects = () => {
  const posts = [
    { id: 0, title: "Computer Science", desc: 'Here are the biggest enterprise technology acquisitions of 2023 so far, in reverse chronological order.' },
    { id: 1, title: "Art", desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, odio.' },
    { id: 2, title: "Physics", desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, optio soluta.' },
    { id: 3, title: "Math", desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maiores facere voluptatum error, officiis tempore!' },
    { id: 4, title: "Biology", desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  ]

  return (
    <div className='flex flex-wrap justify-center lg:flex-row my-4 mx-2'>
      {posts.map((post) => (
        <BlogCard key={post.id} id={post.id} title={post.title} desc={post.desc} />
      ))}
    </div>
  )
}
