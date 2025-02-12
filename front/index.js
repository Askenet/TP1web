document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('.registerForm').addEventListener('click', () => {
		window.location.href = '/register.html';
	});

	const sidebar = document.querySelector('.sidebar');
	const sidebarMenu = document.querySelector('.sidebar-menu');
    const sidebarMenuShow = document.querySelector('.sidebar-menu.show');
    const closeButton = document.querySelector('.sidebarClose');

	if (sidebar && sidebarMenu) {
		sidebar.addEventListener('click', () => {
			sidebarMenu.classList.remove('hidden');
			sidebarMenu.classList.add('show');
            //alert("ouverture du menu");
		});

		closeButton.addEventListener('click', () => {
			sidebarMenu.classList.remove('show');
			sidebarMenu.classList.add('hidden');
		});
	} else {
		console.error('Sidebar, or menu not found');
	}
});

