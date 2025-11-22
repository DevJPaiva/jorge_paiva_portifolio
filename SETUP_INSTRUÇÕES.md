## 🔧 Instruções de Configuração (Opção 2 - esbuild)

### ⚠️ Pré-requisito: Node.js

Você precisa ter Node.js instalado. Se não tiver:

**Opção A: Download direto**

1. Acesse https://nodejs.org/ (recomendado LTS)
2. Clique em "Download"
3. Execute o instalador
4. Reinicie seu computador

**Opção B: Verificar se tem Node.js**
Abra o PowerShell e execute:

```powershell
node --version
npm --version
```

---

### ✅ Depois que Node.js estiver instalado:

**1. Abra o PowerShell ou CMD na pasta do projeto**

Clique direito na pasta e selecione "Abrir PowerShell aqui"

**2. Instale as dependências**

```powershell
npm install
```

**3. Inicie o servidor de desenvolvimento**

```powershell
npm run dev
```

**4. Acesse no navegador**

```
http://localhost:8000
```

---

### 📦 O que npm install faz:

- ✅ Instala esbuild (bundler)
- ✅ Instala React e ReactDOM
- ✅ Cria pasta `node_modules/`
- ✅ Cria arquivo `package-lock.json`

---

### 🚀 Após instalado:

- **Desenvolvimento**: `npm run dev` (com auto-reload)
- **Build final**: `npm run build` (minificado)

---

Todos os seus arquivos permanecerão separados e organizados! 🎉
