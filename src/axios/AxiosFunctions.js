import axios from "axios";
import { toast } from "react-toastify";
import { signOutRequest } from "../store/auth/authSlice";

/**
 * @description Sends a Get request to api
 * @param {String} route
 * @example "/api/route"
 * @returns Promise<any>
 */

export const Get = async (route, accessToken, showAlert = true, dispatch) => {
  const options = accessToken
    ? {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    : {
        headers: {
          Accept: "application/json",
        },
      };
  try {
    const response = await axios.get(route, options);
    return response;
  } catch (error) {
    let errorMessage = "";
    Array.isArray(error?.response?.data?.message?.error)
      ? error?.response?.data?.message?.error?.map(
          (item, i) => (errorMessage = `${errorMessage} • ${item} \n`)
        )
      : (errorMessage = error?.response?.data?.message?.error);
    if (error.response.status === 401) {
      dispatch && dispatch(signOutRequest());
    }
    if (showAlert == true) {
      if (error.message === "Network Error") {
        toast.error(`${error.message} : Please Check Your Network Connection`, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.error(errorMessage, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  }
};

/**
 * @description Sends a post request to api
 * @param {String} route
 * @example "/api/route"
 * @param {Object} data
 * @example {foo:bar}
 * @returns Promise<any>
 */

export const Post = async (
  route,
  data,
  headers,
  showAlert = true,
  dispatch
) => {
  try {
    return await axios.post(route, data, headers);
  } catch (error) {
    let errorMessage = '';
    Array.isArray(error?.response?.data?.message?.error)
      ? error?.response?.data?.message?.error?.map(
          (item, i) => (errorMessage = `${errorMessage} • ${item} \n`)
        )
      : (errorMessage = error?.response?.data?.message?.error);
    if (error.response.status === 401) {
      dispatch && dispatch(signOutRequest());
    }
    if (error.message === 'Network Error') {
      toast.error(`${error.message} : Please Check Your Network Connection`, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error(errorMessage, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }
};

/**
 * @description Sends a post request to api
 * @param {String} route
 * @example "/api/route"
 * @param {Object} data
 * @example {foo:bar}
 *   @returns Promise<any>
 */

export const Patch = async (
  route,
  data,
  headers,
  showAlert = true,
  dispatch
) => {
  try {
    return await axios.patch(route, data, headers);
  } catch (error) {
    let errorMessage = '';
    Array.isArray(error?.response?.data?.message?.error)
      ? error?.response?.data?.message?.error?.map(
          (item, i) => (errorMessage = `${errorMessage} • ${item} \n`)
        )
      : (errorMessage = error?.response?.data?.message?.error);
    if (error.response.status === 401) {
      dispatch && dispatch(signOutRequest());
    }
    if (error.message === 'Network Error') {
      toast.error(`${error.message} : Please Check Your Network Connection`, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error(errorMessage, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }
};

/**
 * @description Sends a post request to api
 * @param {String} route
 * @example "/api/route"
 * @param {Object} data
 * @example {foo:bar}
 *   @returns Promise<any>
 */

export const Put = async (route, data, headers, showAlert = true, dispatch) => {
  try {
    return await axios.put(route, data, headers);
  } catch (error) {
    let errorMessage = '';
    Array.isArray(error?.response?.data?.message?.error)
      ? error?.response?.data?.message?.error?.map(
          (item, i) => (errorMessage = `${errorMessage} • ${item} \n`)
        )
      : (errorMessage = error?.response?.data?.message?.error);
    if (error.response.status === 401) {
      dispatch && dispatch(signOutRequest());
    }
    if (error.message === 'Network Error') {
      toast.error(`${error.message} : Please Check Your Network Connection`, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error(errorMessage, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }
};

/**
 * @description Sends a Delete request to api
 * @param {String} route
 * @example "/api/route"
 * @param {Object} data
 * @example {foo:bar}
 *   @returns Promise<any>
 */

export const Delete = async (route, data, headers, showAlert = true, dispatch) => {
  try {
    return data == null
      ? await axios.delete(route, headers)
      : await axios.delete(route, data, headers);
  } catch (error) {
    let errorMessage = "";
    Array.isArray(error?.response?.data?.message?.error)
      ? error?.response?.data?.message?.error?.map(
          (item, i) => (errorMessage = `${errorMessage} • ${item} \n`)
        )
      : (errorMessage = error?.response?.data?.message?.error);
    if (error.response.status === 401) {
      dispatch && dispatch(signOutRequest());
    }
    if (error.message === "Network Error") {
      toast.error(`${error.message} : Please Check Your Network Connection`, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error(errorMessage, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }
};
