import { Component, OnInit } from '@angular/core';

interface producto {
  nombre: string;
  imagen: string;
}

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.scss'],
})
export class ListaComprasComponent implements OnInit {
  listaDeProductos: producto[] = [
    {
      nombre: 'cocacola',
      imagen:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITBhURExMSFRMVFxoaFxcXFRcVFxIVFRcbGBcSFhUYHSogGRolGxUXITEhJiorLi4uGCI1ODMtNygtLisBCgoKDg0OGxAQGjclHyMyKzAtKzUrLzUtLS01Ky02LS03NS02Ny0tKy0tLS0tLS0vLS0tNS0tLS0tLS0tLS0tLv/AABEIAMsA+AMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAABQYIBAMHAQL/xABGEAABAwIDAwgFCAcIAwAAAAABAAIDBBEFEiEGMUEHEyJRYXGBkRRSobHBIyQyQmJyktEzU2OTwuHwFRclc4KDovEWJkP/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEBQEG/8QAKxEBAAIBAwIFAwQDAAAAAAAAAAECEQMEEiExIjJBUfATYXEFgbHBIzOh/9oADAMBAAIRAxEAPwD7iiIgIiICIiAiIgIiICIiAubEa1kNC+aQ2Yxpc479B1DiV0qK2no+dwOSPMG3F7luYXabjS44gcV5bOOienxm8c+3r+FdpeUSOR/Rp5Q31nuY2/AC1zc9xXjiPKVHGSGwukI32cABuOrtfWHDio6h2Ca5wzPOoa49EW3g5deF9fFd3920JY67z07X0A0G5o6hu07As2Nf3deb/pkWzFZx8+7mZysxgAyUsob1sex5HgcqvuD4nFU4ayoidmjkF2m1jvsQRwIIIPcvmu0PJ21tM9zZDqG3s0ZmhoyjL4DcrpsFhBpdm2RF+e5c8G2XLnObJa53ElW6fOPMx7qdraM6MTE+3VYkRFawiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIC48XhLsPcL8Ne0cR32v4rsXjWH5q77p9oQcNM4mccOjfssR+Y9q72nRR9FrP3MaPYSpBv0EEdjk+WheTu7r+5duHx5aQDs07BwXHtDFmwx/dfyXfSG9Iw/ZHuQeyIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAuLF5LUJtvJAHnf3BdqovKPtY2kqIYBcveHP0sLNaQBe/WSfwlRvaKxmUqUm88YWmiHRce2w7hp7wV2D9GqNhGNSSUQcLgfeK/iXHJ+ec3Nax9dyw3/U9vWMzLTXZa1pxELvWgGlIPEFeGz8+fCWHi27T3tNvgqMdpJQ+znXFt2Y/FSPJxtMyeeenyhj2HPw6YJs53eDlv94KzQ3ulrTiko6u11dOM2heURFsZhERAREQEREBERAREQEREBERAREQEREBERAREQEREBZl2ux8Vu30swN4mnm4/8uO4BHWHHM7/AFr7Rys7Q+h7HSFptLN8lH1gvBzuHUQwOIPXZZ12cjviZJ+i1pJ8Nyz7mfBMN2xr/kiX1/B60Mw1reJ1XGK8uqHuBuMxULQ1hOHTPO+MO9jbge1Q2E4i8xuF9AvntXa8qZh9JoxEXtnul8RxIifeorZraD0HbqGpebROdkl6ubk0JPY05X/6F4ST3xEA9aiceYHRFb9lpxpzDDv/ABRNWtwdEVI5H9ofS9jI8xvLB8k/rOUDI49d22BPW1yu67UPnJjEiIiPBERAREQEREBERAREQEREBERAREQEREBERAREQZ/5eMa53adtMD0aZguP2ktnuv3NEXmVUtnoLYbJJxc4AdzTf4Lj2ir/AEjH6movfnZXuH3S85B4MyjwUpGMmGRsHFw9381g3NsxiHZ2NOPGUu/5PZmTfd4uT95wFr9xCgsGPyb/AAU3jUv+D5Bxc0eWvwVfomuD3NsbkLNMZrMOpo5zyn7vSrdaqDu1c+IR6uHDeO4pX08gZcjQL2l6VCHdgurdOMRDLu5zfssvINjJh2vdTOPRqGED/MjvIz/iJfxBaJWR8ErfRtqKeovbm5GvP3WvGYeLbjxWtxuXQpbMOHr042fqIimoEREBERAREQEREBERAREQEREBERAREQEREBfjhdtl+ogyJV0LG4pUsZcMimkawXJ6DZC1oJOp0AU5g9M6WizlpcGudY9rGZ3Hwbr5KKp7vkneASZJHEAaklzyQAOJ1VvoMJqaTDiHPDSZAHxse4uje5mYMkIGXNlbq0OJAIva6wX8Vp9odyuKaVPeYcWI4RUhuVsZLg7cXt06IJ3u3AObruFwN5Udh2HVEk2YMOa7m2uwas+lo4/RFiM26+l76Lv2jxCZuHkiWUHMDcPINzpe47NFW6XEpmx2bLI0Zi7RxHSIsXaHeQSo8K4XaWrqdsprEKKpe3KIiS4hoF2g3Iu2wJvYg7928bwufDKGYU5bKxzW8L28QujC8Nr6ilzsldHAHACSR7msMgGVrIw0Fz35RazWmwGtlL0GA1oppSaiKpbGLSRxzGZ8QJzZyxzR0TYHM29/NS+ninRXq63LVxMwpohadoIo33MZkY1wva7XvAcMw13LXDW2aANwWTtocPmgrWzPbYfJv3i7cxLmBw+q4hhdbqWsQdFp0fK5m783R+oiK5kEREBERAREQEREBERAREQEREBERAREQEREBedQ+0Dj1AnyC9FwY/LkwKd/qwyHyYSgzzydDmsImrsud8IYynba+ernJbGbccou63d1K5UOzbPQXRumzCB5fVTc45x56x9JjZGdC4HmWh1rkk3P1VUtl68U2xNJOWZ2R4iXvG67o4WFgvwNi8juVw2ZqJanDKhoopebqHh0YDiwANkdJZ0jx07ucXEjUkm1ha2TpnDrX5cIn8fP5n93PV7P004he2NxbMWxwwFzwJZukZZJHXzczEzVxaW5nMIGUWvEYRgFBVY9URxQvjpIMr3VDpn5WU8YJc9oN8xlINiTYMFwLjWz7Z43JSYSXy4c8H0cU7H57Rsz/TF4/oNdpuIc6wFxvULQ1bY+SuOolD3trKz50WDpOjjc60AtYNa7mGRgaACTwVkVhRF7xGc/aOqBx/aNkznOkjlgpMoZSRtY5rXUzSedjY64DXvtGHP1s0vGugP97BQ1H/k09TK2SN0TTJK2zozI6Y2iprO1DZHOaADplHcrHTSTPppsRkg5yohlBgpSC5lNNKGMgicNMvMxgPP0ReQXyubpKYPCHYXC2Nsj4ZjNNUSOJle+CkJYI2yWBdzsjnkX1LXu3bgtXMH1IicRHz5/18v5SMTnmqgJNI2tuy0fNsleWjnJx65cbHNr0S1agon5qNjutrT5gFZv5YXSf2jDHK452wkubvDZJXGSQtJ+rmeYwOAhHCy0Ls5Lm2epnetBEfONpU9Psp3ExMxMJFERWMwiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgKtcpOICDYOskN9YXMFhch03yTD3Zni/YrKqzyl0+fYGtb1QPd+7Gf+FHsM54Hi9TBRGOKaSNslr5HhgdbdxuD2gXVmwWo+VDJHF0p6RLnFzjc7854qhMePRo/wCupT1K/LtDGb2Do/zWGYmbO1a8RTpHzCe232hqBEPnEuY2BaZC4PZaxY5ly1wta4cLHiqphe1dZTUToYKiSKN5u5rXW1I3tO9p7WkblJbcM+exfdPvCrdU2zgrIn0VRTw5/p3U+N1TcOkp2TObDMbyMD2gSHcS4k31G/r43Ujg+0VbFA2MVL2xRse1rWyCzGSG7wMpNrnxHCyhwLx7l64cz5o89ZA9oUZtmEr6XGYz6v62pxSeoqc8jzIdek5wO+27W+4DyWleTKvbNsDRvbm0hbGb780I5px7szDYrMGMC0i0/wAmNNzfJ/RN64Wv/efKfxK/R8rBuIxKzoiK1mEREBERAREQEREBERAREQEREBERAREQEREBceMU3O4RNF+sie38TSPiuxEGMKYfM239ZWI2/tGmcO0KNxWl5rEZ4R/8p5Gd2WRzfgpOn1iiPqvH9exYdScWz+XY06cqR+ISu2cIL4HdYdw7lV8Tis4d6u22TfmUJ+0R7P5Km4o7UKGZ5tGnEfRnLyaz5NdtBHbD2faefZf8l5RNvGu+nj+QhHa4+/8ANecu63Xp0rKv44750R1fkte4NTc1g8MX6uJjfwtA+Cya2m53aqOK36SeNn43tb8Vr5bdLyuHufPgREVrMIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiDKvKRTc1ygVzBoDLn8ZWtkJ83lKUf4cHdrT8FMctEAHKLMRvfFE49+TL7mBQtA6+EO+y2/k66wbp29hPhjKz7Ti+BxH7YPE72k2VIxRvTCuuLvvsxEb36Tfc4cFT8SN3tVNJnnDRWI+nPz1ftM3oqcMWUU/a0+66jKBnSsQp/FIsph7GH3N/NV2t1lotHSsIfYal53lOpW/t8/7oGT+BamWceSaAf3pRX+qyUjvMZHucVo5dXS8kPnN1/tkREVjOIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIo/aHEfR8CnqP1UT3gdZa0kDxICDN/KVibZ+UKqfe7Wu5sf7LQx3/ADa/zX7BA1uBF3W3W+7VpLR+LKPFVLMXVLnOJcTe5O9xJ1J7TqfFT+KVlsJZEN7iPJv87LFrV5S7G2twiFnxeP8A9cZqbDIdbjflIGoy8Xcb6jrVSkaHSduW/DqFx4Xt4K8Y48DZgM+4N/V/17FSKWUemuv6vxH5LPnH7NenEes95eROU2aRfv4Aa+4FWnF5R6DC/tA8HN/NvtVKxCe7+5WSobzuyrQ09LI0j7zP+lOdPlETKq2txnEdcO3ZWqbTcqtO8mzS4NP++0xDwzOafBaSWRMZkd6YyY3HRFyNCLbyO3Ulaq2cxH0jAIKj9bEx573NBI87rZodKRDl7vrfl7pFERXMoiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgKncr05ZydVRHEMb4PlY0+xyuKqPKzTc5yeVY9VjX/upGyH2NXk9kq94ZiJywDtJ9inMNpmy1Mb3Hosbu63dv8AXBV6Y3jCkcFqsjdf68lntGIy3RfM4WPamvIw1retw9lyqkJuldSGO1nONYLgWueKi2QE8QPAqERGMrotbGIecjrlTGCYgRDzROn1ey+8KLfSEfWB8HD4IGyMN7D2qU4mMQh1ifEmsWZenA/rcvv3I3OX8nNLfe3nG+DJntHsAWapq4kAHRab5JaXm+TukB+sx0n72R0g9jgpaFZjup3d62iMLeiItDEIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIC4cbhjfhEscv6OSNzHaE9F7S06DXiu5EGWW4FDcte/IWkA5OmwkaFwBAdvHUpXDtgaeQZm1bgT+weT4gFaCrcHp5f0kMT+1zGk+dlCVOxdBe/ozAewub28Cq5pCcXtHaXySp5NYefa013S9UUs+o6szQ4N77G3VwXRDyVt5u/pbbWOpglbftsW6W6vrfZV9qNm6Vp6MZHbnkv55lxyYJBuyutrpzkm78ScKpxrakdpUZ/JzTiSzq/X1WUk7yeH0mg2ueFjbttczNLyWUnMhzq2QA9cYjNu1srbt8lZqTA4M1srrdXOSW3dWZT9Ds3S5P0XhnfbyzWThX2Pranu+U47sZh0UDYYalz6iRwa3NkLWNJs6R+RnAHrBNhYX3/c8Lp2R4bHFH+jjY1jOxrGho9gXlRYRTxD5OGNna1oB813qUVwrtbPcREUkRERAREQEREBERAREQf//Z',
    },
    {
      nombre: 'papas',
      imagen:
        'https://http2.mlstatic.com/D_NQ_NP_897320-MCO32957596474_112019-O.jpg',
    },
    {
      nombre: 'arroz',
      imagen:
        'https://metrocolombiafood.vteximg.com.br/arquivos/ids/220140-1000-1000/7702552000516-1.jpg?v=636794507270470000',
    },
    {
      nombre: 'jugo',
      imagen:
        'https://jumbocolombiafood.vteximg.com.br/arquivos/ids/171621-750-750/7702090029871-20-281-29.jpg?v=636111275333130000',
    },
    {
      nombre: 'chocorramo',
      imagen:
        'https://lh3.googleusercontent.com/g7pXefbrXwISqmbi8F8071bfhD5rmZtXY6g6DGF13pIiF3Ua_YAXRoPqyTfd_URb0v6S_xGRCt--c8Q8_-ecLKpYtaGrQ0E6hw',
    },
    {
      nombre: 'pepsi',
      imagen:
        'https://jumbocolombiafood.vteximg.com.br/arquivos/ids/200354-1000-1000/7702090029567.jpg?v=636263167474900000',
    },
    {
      nombre: 'cerveza',
      imagen:
        'https://tiendatellevo.com/wp-content/uploads/2020/07/aguila-litro.jpg',
    },
    {
      nombre: 'celular',
      imagen:
        'https://exitocol.vtexassets.com/arquivos/ids/4883480-800-auto?width=800&height=auto&aspect=true',
    },
    {
      nombre: 'computador',
      imagen: 'https://microxol.com.co/wp-content/uploads/2016/08/v530ss.jpg',
    },
    {
      nombre: 'gafas',
      imagen:
        'https://i.linio.com/p/0d3817add59a110d4dbe2ef8d278497f-catalog.jpg',
    },
    {
      nombre: 'Mochila',
      imagen:
        'https://images-na.ssl-images-amazon.com/images/I/81I7kfacG6L._AC_SY679_.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
