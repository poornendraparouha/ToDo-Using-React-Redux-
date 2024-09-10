// store, next, action

export const loggerMiddleware= (store) => {
    return (next) => {
        return (action) => {
            // Log actions
            console.log("[LOG]:" + action.type + " " + new Date().toString())
            // Call the next middleware in pipeline
            next(action);
            // log the modified state of app
            console.log(store.getState());

        }
    }
}