import React from 'react';
import Users from './friends/Users';

class Friends extends React.Component {
  render() {
    return (
        <Users list={[
          {name: 'Henry Miller', genre: 'Scandalous Nonfiction', bio: 'American writer, expatriated in Paris at his flourishing.', friend: true},
          {name: 'F Scott Fitzgerald', genre: 'Fiction', bio: 'American writer whose works illustrate the Jazz Age.', friend: false},
          {name: 'Anais Nin', genre: 'Literary Diarism', bio: 'American diarist, essayist, novelist, and writer of short stories and erotica.', friend: true},
          {name: 'Earnest Hemingway', genre: 'Fiction', bio: 'American novelist, short story writer, and journalist.', friend: false},
          {name: 'Virginia Woolf', genre: 'Fiction', bio: 'English writer, who is considered one of the foremost modernist authors of the 20th century.', friend: true},
          {name: 'Jack Kerouac', genre: 'Memoir', bio: 'American novelist and poet. Wrote On the Road.', friend: true},
        ]}/>
    )
  }
}

export default Friends