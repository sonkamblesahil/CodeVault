import React from "react";
import "./Cards.css"; // Assuming you have some styles for Cards
const Cards = () => {
  return (
    <div className="  bg-white p-4 rounded-2xl border border-gray-100 border-l-4 border-l-blue-500 shadow-md hover:shadow-md transition-shadow duration-300">
      <div className="title flex items-center justify-between p-4 m-4">
        <div className="flex items-center justify-between gap-3">
          <div className="text-lg font-semibold bg-blue-300 px-1 rounded-xl">
            #1
          </div>
          <h2 className="text-xl font-bold">Two Sum</h2>
          <button className="bg-green-200 text-green-400 font-bold px-3 py-1 text-sm rounded-xl">
            Easy
          </button>
        </div>

        <div>
          <button className=" text-white px-2 ml-2 rounded-xl hover:cursor-pointer">
            <img src="./src/icons/view.svg" alt="" />
          </button>
          <button className=" text-white px-2 rounded-xl hover:cursor-pointer">
            <img src="./src/icons/edit.svg" alt="" />
          </button>
          <button className=" text-white px-2 ml-2 rounded-xl hover:cursor-pointer">
            <img src="./src/icons/delete.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="description p-3 flex items-center text-blue-600 font-semibold font-sm hover:cursor-pointer hover:text-blue-800">
        <img src="./src/icons/open.svg" alt="" />
        <a href="#">View On LeetCode</a>
      </div>

      <div className="flex flex-row gap-4 p-2 ">
        {/* Solution Code section */}
        <div className="bg-white rounded-xl shadow-sm py-6 px-6 w-full md:w-1/2 h-max">
          <div className="font-bold p-1 text-gray-800">
            <p>Solution Code</p>
          </div>
          {/* Code display area with hidden scrollbar */}
          <div className="bg-gray-900 text-gray-100 rounded-md p-4 h-64 overflow-y-scroll custom-scrollbar-hide">
            <pre className="whitespace-pre-wrap text-sm">
              <code>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi nostrum vel commodi dolorum, minima dolores saepe id esse quidem, quam, aut laborum blanditiis molestias nobis ipsum autem doloremque consequuntur quisquam modi! Quia asperiores saepe distinctio accusantium mollitia. Dolorum et inventore, ea minus libero illum qui harum similique modi consequatur cum impedit adipisci nesciunt odio vel soluta facilis, necessitatibus nam, enim dignissimos sint asperiores alias. Omnis quam quidem, architecto praesentium, quisquam dignissimos autem magnam aut deleniti obcaecati sed vitae quos quod ad illo amet delectus, corporis quas. Accusantium id animi, totam quam veniam at consequatur ad ut harum non cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum quis unde nihil eos similique placeat cum, quod porro obcaecati beatae. Odio quibusdam, non accusamus fugit, nobis fuga quisquam magni porro obcaecati ratione eveniet ducimus, necessitatibus hic saepe consequuntur. Itaque.
              </code>
            </pre>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm w-1/2 max-w-2xl mx-auto mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Notes</h3>

          <div className="text-gray-700 mb-4 p-4 h-32 overflow-y-scroll custom-scrollbar-hide">
            <p className="mb-2 border border-gray-50 p-3 bg-gray-100 rounded-lg">
              This solution uses a hash map to store the numbers we've seen so
              far and their indices. For each number, we check if its complement
              (target - current number) exists in the map. If it does, we've
              found our pair.  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quibusdam ipsam pariatur velit, a sed accusantium reiciendis, quaerat ab non eaque aut repudiandae totam eos doloremque dolore iusto consequuntur. Tempore odio ipsam voluptatibus magni, placeat dolore perspiciatis corporis. Unde, porro aut? Quod harum culpa doloribus fugit iste repudiandae, impedit amet? Minima nulla recusandae, suscipit perspiciatis amet adipisci similique repellat unde error aliquid temporibus hic nostrum eum tempore blanditiis quo autem voluptatum exercitationem! Adipisci neque quidem consequuntur officia facere, quibusdam pariatur vero iure distinctio natus quasi dolorem et labore error, nesciunt ratione ipsum non debitis, inventore quam dolores atque praesentium sit.
            </p>
          </div>
            <div className="text-gray-600 text-m p-3">
              <p className="font-medium">Time Complexity: O(n)</p>
              <p className="font-medium">Space Complexity: O(n)</p>
            </div>

          <div className="text-gray-800 font-semibold mb-2 p-1 px-3">Tags</div>
          <div className="flex flex-wrap gap-2 px-3">
            <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">
              Array
            </span>
            <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">
              Hash Table
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4 p-3">
        <button className="text-blue-600 font-semibold hover:cursor-pointer ">View Full Solution</button>
      </div>
    </div>
  );
};

export default Cards;
