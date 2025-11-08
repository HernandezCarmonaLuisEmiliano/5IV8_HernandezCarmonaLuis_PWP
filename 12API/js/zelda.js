const API_URL = "https://zelda.fanapis.com/api/games?limit=10";

const resultsContainer = document.getElementById('results-container');
const loadingMessage = document.getElementById('loading-message');

async function obtenerJuegosDeZelda() {

    loadingMessage.textContent = "Cargando datos de la API...";

    try {
        const respuesta = await fetch(API_URL);
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status} - ${respuesta.statusText}`);
        }

        const datos = await respuesta.json();

        if (!datos.data || datos.data.length === 0) {
            resultsContainer.innerHTML = '<p class="text-center text-gray-500">No se encontraron juegos de Zelda.</p>';
            return;
        }

        mostrarJuegosEnTabla(datos.data);

    } catch (error) {
        console.error("Error al obtener los juegos:", error);
        resultsContainer.innerHTML = `
            <p class="text-center text-[#c0392b] font-bold">
                ⚠️ Error al cargar los datos: ${error.message}
            </p>
            <p class="text-center text-sm text-gray-500 mt-2">
                Asegúrate de que la URL de la API sea correcta y esté activa.
            </p>
        `;
    } finally {
        loadingMessage.remove();
    }
}

function mostrarJuegosEnTabla(juegos) {
    const tablaHTML = `
        <table class="min-w-full divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
            <thead class="bg-blue-50 border-b-2 border-[#3498db]">
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-[#2c3e50] uppercase tracking-wider">
                        Nombre
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-[#2c3e50] uppercase tracking-wider">
                        Lanzamiento
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-[#2c3e50] uppercase tracking-wider">
                        Descripción (Inicio)
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 text-[#333]">
                ${juegos.map(juego => `
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap font-bold text-[#e74c3c]">
                            ${juego.name}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            ${juego.released_date || 'Fecha Desconocida'}
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-500 max-w-sm overflow-hidden text-ellipsis">
                            ${juego.description.substring(0, 100)}...
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    resultsContainer.innerHTML = tablaHTML;
}

window.onload = obtenerJuegosDeZelda;