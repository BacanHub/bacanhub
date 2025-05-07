.PHONY: dev build clean install

# Variables
NPM = npm

# Desarrollo
dev:
	@echo "🚀 Iniciando entorno de desarrollo..."
	@echo "📦 Instalando dependencias..."
	@$(NPM) install
	@echo "🌐 Iniciando servidor de desarrollo..."
	@$(NPM) run dev

# Construcción
build:
	@echo "🔨 Construyendo aplicación..."
	@$(NPM) run build

# Limpieza
clean:
	@echo "🧹 Limpiando archivos generados..."
	@rm -rf dist
	@rm -rf node_modules

# Instalación
install:
	@echo "📦 Instalando dependencias..."
	@$(NPM) install 