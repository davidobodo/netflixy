import configureStore from './configureStore'

const {store, persiststore } = configureStore();

export { persiststore, store as default}

//store is the default export while persistStore is a named export