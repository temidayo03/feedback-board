import React from 'react';

const tags = ['All', 'UI', 'UX', 'Enlargement', 'Bug', 'Feature']
const roadmaps = [
    { type: 'Planned', count: 2, class: "bg-orange" },
    { type: 'In-Progress', count: 3, class: "bg-purple" },
    { type: 'Live', count: 1, class: "bg-green" },
]

function Consult() {
    return (
      <div class="consult">
        <section class="feedback">
            <h3>Frontend Mentor</h3>
            <p>Feedback Board</p>
        </section>
        <section class="list">
            {tags.map(tag => <button class="button m-5px">{tag}</button>)}
        </section>
        <section class="px-1">
            <table id="customers" class="p-1">
                <tr class="h-tag">
                    <th>Roadmap</th>
                    <th id="view">view</th>
                </tr>
                {roadmaps.map(roadmap => 
                    <tr>
                        <td><span class={`icon-dot ${roadmap.class}`}></span>{roadmap.type}</td>
                        <td>{roadmap.count}</td>
                    </tr>
                )}
            </table>
        </section>
      </div>
    );
  }

  export default Consult;