import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useHistory } from "react-router-dom";
import { useMassage } from "./useMassage";

export const useAuth = () => {
  const history = useHistory();
  const { showMassage } = useMassage();

  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);

    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`
    ).then((res) => {
      if (res.data) {
        showMassage({ title: "ログインしました。", status: "success" })
        history.push("/home");
      } else {
        showMassage({ title: "ユーザーが見つかりません。", status: "error" })
        alert();
      }
    }).catch(() => showMassage({ title: "ログインできません。", status: "error" })
    ).finally(() => setLoading(false));
  }, [history, showMassage]);
  return { login, loading };
};