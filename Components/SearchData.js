import store from '../store';

const SearchData = async data => {
  const url = `https://api.github.com/search/repositories?q=${data}`;
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const fetchData = await res.json();

    //store to redux after search
    const action = {type: 'SEARCH', repos: fetchData};
    return store.dispatch(action);
  } catch (error) {
    return console.log(error);
  }
};

export default SearchData;
