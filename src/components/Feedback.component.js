import React from 'react';

const suggestions = [
    {
        rating: 126,
        title: 'Add Tags for solutions',
        description: 'Easier to search for solution based on a specific stack',
        tags: ['Enlargement'],
        messagesCount: 12,
    },
    {
        rating: 126,
        title: 'Add a dark theme option',
        description: 'It would help people with light sensitivities and who prefer dark mode',
        tags: ['Feature'],
        messagesCount: 41,
    },
    {
        rating: 126,
        title: 'Add Tags for solutions',
        description: 'Easier to search for solution based on a specific stack',
        tags: ['Enlargement'],
        messagesCount: 41,
    },
    {
        rating: 126,
        title: 'Allow image/video upload to feedback',
        description: 'Image and screenshots can enhance comments on solutions',
        tags: ['Enlargement'],
        messagesCount: 13,
    },
    {
        rating: 126,
        title: 'Ability to follow others',
        description: 'Stay updated on comments and solutions other people post',
        tags: ['Feature'],
        messagesCount: 12,
    },
    {
        rating: 126,
        title: 'Preview images not loading',
        description: 'Challenge preview images are missing when you apply a filter',
        tags: ['Bug'],
        messagesCount: 12,
    },
]


function Feedback() {
    return(
        <div class="page"> 
            <section class="header-page">
                <div class="suggest">
                    <i class="fas fa-award"></i>
                    <h4>6  Suggestions</h4>
                    <label for="">
                        <div class="custom-select">
                            <h4>Sort by:</h4>
                            <select>
                              <option value="0">Most Updates</option>
                              <option value="1">Recent Update</option>
                              <option value="2">Trending</option>
                            </select>
                          </div>
                    </label>
                </div>
                <button>+ Add Feedback</button>
            </section>
            {suggestions.map(suggestion => (
                <section class="tags">
                    <div class="solution">
                        <div class="arrow t-grey"><i class="fas fa-chevron-up"></i><h4>{suggestion.rating}</h4></div>
                        <div class="px-15">
                            <h4>{suggestion.title}</h4>
                            <p class="py-15 t-grey">{suggestion.description}</p>
                            {suggestion.tags.map(tag => <button class="button">{tag}</button>)}
                        </div>
                    </div>
                    <div class="main">
                        <span class="far fa-comment text-gray"></span>
                        <h4 class="total-msg">{suggestion.messagesCount}</h4>
                    </div>
                </section>
            ))}
        </div>
    );
  }

  export default Feedback;

