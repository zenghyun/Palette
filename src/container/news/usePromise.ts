import { useState, useEffect } from "react";
import { ResponseData } from "../../type/apiType";

type PromiseCreatorType = () => Promise<ResponseData>;
type DependencyType = string | undefined;

export default function usePromise({
  promiseCreator,
  deps,
}: {
  promiseCreator: PromiseCreatorType;
  deps: DependencyType[];
}) {
  // 대기 중/완료/실패에 대한 상태 관리
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState<ResponseData | null>(null);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loading, resolved, error] as const;
}
