export const helpHttp = () => {
    const customFetch = (endpoint, options) => {
        const defaultHeader = {
            accept: "application/json",
        }
        
        //AbortController permite cancelar una o mas solicitudes web en cualquier momento en caso de no recibir respuesta del servidor
        const controller = new AbortController();
        options.signal = controller.signal;
        
        //Si el usuario tiene método, se deja el método, si no se definió, entonces usa el GET (suele venir por defecto)
        options.method = options.method || "GET";
        //Si el usuario especificó algunas cabeceras, combina las establecidas por default con las que ya vienen, sino deja las definidas por defecto
        options.headers = options.header 
        ? {...defaultHeader, ...options.header} 
        : defaultHeader;
        
        //Si tiene body, hay que pasarlo a cadena de texto y sino, lo eliminamos (NO SE PUEDE MANDAR BODY VACÍO O FALSO, POR ESO SE ELIMINA EN LA LINEA 22). 
        //Los metodos GET no necesitan body
        options.body = JSON.stringify(options.body) || false;
        if(!options.body) delete options.body;
        
        // console.log(options);

        //Si después de 3s, no hay respuesta del servidor, entonces que aborte la op.
        setTimeout(() => {
            controller.abort();
        }, 3000);

        
        return (
            fetch(endpoint, options)
            .then((res) => res.ok 
                ? res.json() 
                : Promise.reject({
                    err: true,
                    status: res.status || "00",
                    statusText: res.statusText || "Ocurrió un error!"
            }))
            .catch((err) => err)
        )
    }
    
    const get = (url, options = {}) => customFetch(url, options);
    const post = (url, options = {}) => {
        options.method = "POST";
        return customFetch(url, options);
    }
    const put = (url, options = {}) => {
        options.method = "PUT";
        return customFetch(url, options);
    }
    const del = (url, options = {}) => {
        options.method = "DELETE";
        return customFetch(url, options);
    }

    return{
        get,
        post,
        put,
        del,
    }
}