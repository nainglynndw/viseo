const initState = {
  repos: [],
};

//resucer
const reducer = (state = initState, action) => {
  //store fetched data with deep copy without pushing to oridinary array
  switch (action.type) {
    case 'SEARCH':
      return {
        repos: action.repos.items.map(a => ({...a})),
      };
  }
};

export default reducer;
