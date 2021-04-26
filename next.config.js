const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

module.exports = (phase) =>{
    if(phase===PHASE_DEVELOPMENT_SERVER){
        return {
            env: {
                mongodb_username: 'kush',
                mongodb_password: 'elRakKQUAz0yKWk5',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'speedyevents',
            }
        }
    }
    //For development and production differences
    return{
        env: {
            mongodb_username: 'kush',
            mongodb_password: 'elRakKQUAz0yKWk5',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'speedyevents',
        }
    }
}