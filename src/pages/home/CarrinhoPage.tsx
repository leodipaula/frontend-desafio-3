import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { useCarrinho } from '../../components/carrinho/CarrinhoContext';

export default function CarrinhoPage() {
  const { carrinho: itens, removerDoCarrinho: remover, limparCarrinho: limpar } = useCarrinho();

  const total = itens.reduce((soma, item) => soma + item.preco, 0);

  const finalizarPedido = () => {
    toast.success('Pedido finalizado com sucesso!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
    limpar();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-red-800">Seu Carrinho</h1>

      {itens.length === 0 ? (
        <p className="text-gray-600">Seu carrinho está vazio.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {itens.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white shadow rounded-lg p-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="w-20 h-20 rounded object-cover"
                />
                <div>
                  <h2 className="font-semibold text-lg">{item.nome}</h2>
                  <p className="text-green-600">R$ {item.preco.toFixed(2).replace('.', ',')}</p>
                </div>
              </div>
              <button
                onClick={() => remover(item.id)}
                className="text-red-600 hover:text-red-800 font-bold"
              >
                Remover
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6">
            <p className="text-xl font-semibold">
              Total:{' '}
              <span className="text-green-700">
                R$ {total.toFixed(2).replace('.', ',')}
              </span>
            </p>
            <button
              onClick={finalizarPedido}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Finalizar Pedido
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
