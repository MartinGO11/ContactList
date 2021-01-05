const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			createContact: () => {},

			loadContact: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/martin_super_agenda")
					.then(response => response.json())
					.then(result => {
						console.log("Get Contact", result);
					});
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
