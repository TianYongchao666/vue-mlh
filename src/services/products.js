import { get } from '../utils/request';

export function getList(page = 1, per = 10) {
  return get('/appapi/customer/getCustomerType', {
    page,
    per,
  });
}

export function getOneProduct(id) {
  return get(
    'http://www.mei.com/appapi/silo/eventForH5?categoryId=women&pageIndex=2&timestamp=1592294422993&summary=5c5ca7e7f6229b8c9180f8cfd259328b&platform_code=H5'
  );
}
