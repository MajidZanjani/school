import { Link } from "react-router-dom";

export const News = () => {
  return (
    <section className="m-3 mt-10 p-3 bg-green-50 rounded shadow-lg">

      <p className="mb-3 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ea eum minus quam, ipsum numquam eos? Possimus odit tempora saepe, quam sapiente libero numquam enim nisi quidem iusto est ducimus modi qui nam voluptates beatae ullam vel quas? Illum qui eligendi rem libero fugit quod dolores ducimus. In eligendi rem necessitatibus vero totam sunt, eius optio voluptas, ratione facere aut.</p>
      <div className="grid grid-cols-1 md:gap-6 md:grid-cols-2">
        <p className="mb-3 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ratione quisquam, temporibus aliquam sunt tempore blanditiis incidunt obcaecati at. Est odit repellat expedita alias praesentium? Modi neque vero inventore delectus aperiam repellat autem culpa. Fugiat numquam dignissimos officiis veritatis architecto quibusdam, vero tempora labore reiciendis itaque, molestias provident ad sequi, blanditiis hic sed maiores fuga eveniet corporis totam aut odit!</p>
        <blockquote className="mb-3">
          <p className="text-xl italic font-semibold text-gray-900 dark:text-white">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque reprehenderit nostrum eligendi ipsam dicta nam, accusamus rerum deserunt illum. Quas culpa corporis, debitis error necessitatibus omnis consequatur fuga ab dolorem? Distinctio libero tenetur ipsum impedit illum natus saepe accusantium laborum."</p>
        </blockquote>
      </div>
      <p className="mb-3 text-gray-500 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum amet iusto reiciendis corporis. Officia tenetur voluptatum ipsa magni sed quam fugit architecto, ipsam inventore. Nulla quo dolorum modi ipsam ea.</p>
      <Link>Read More..</Link>
    </section>

  )
}
