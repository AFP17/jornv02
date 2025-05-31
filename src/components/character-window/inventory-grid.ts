export function createInventoryContent(): string {
  return `
    <div class="h-full flex bg-gradient-to-br from-slate-900/95 to-slate-800/95 overflow-hidden">
      <!-- Left Panel: Inventory Grid -->
      <div class="flex-1 flex flex-col min-w-0">
        <!-- Inventory Header -->
        <div class="flex-shrink-0 bg-gradient-to-r from-slate-800/90 to-slate-700/90 border-b-2 border-amber-500/30 p-4 shadow-xl">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-gradient-to-br from-amber-500/30 to-amber-600/30 border border-amber-500/50 rounded-lg flex items-center justify-center shadow-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-amber-300">
                  <path d="M5 7c1-1 3-1 5-1s4 0 5 1v12H5V7Z"/>
                  <path d="M12 6V2"/>
                  <path d="M8 6V4"/>
                  <path d="M16 6V4"/>
                </svg>
              </div>
              <h2 class="text-amber-200 text-lg font-bold uppercase tracking-wider">Inventory</h2>
            </div>
            <div class="flex items-center gap-4">
              <!-- Capacity Display -->
              <div class="flex items-center gap-2 bg-black/30 border border-white/20 rounded-lg px-3 py-2">
                <div class="w-4 h-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full"></div>
                <span class="text-white text-sm font-bold">89/96</span>
                <span class="text-white/70 text-xs">slots</span>
              </div>
              <!-- Weight Display -->
              <div class="flex items-center gap-2 bg-black/30 border border-white/20 rounded-lg px-3 py-2">
                <div class="w-4 h-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
                <span class="text-white text-sm font-bold">245.8/300</span>
                <span class="text-white/70 text-xs">kg</span>
              </div>
            </div>
          </div>

          <!-- Search and Filter Bar -->
          <div class="flex gap-3 mb-3">
            <!-- Search Input -->
            <div class="flex-1 relative">
              <input 
                type="text" 
                placeholder="Search items..." 
                class="w-full px-4 py-2 pl-10 bg-black/40 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-amber-400/50 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all duration-200"
                id="inventory-search"
              />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </div>
            
            <!-- Sort Buttons -->
            <div class="flex gap-2">
              <button class="sort-btn active w-full h-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500/80 to-amber-600/80 text-white text-xs font-bold rounded-lg transition-all duration-200 hover:scale-105" data-sort="name">
                📝 Name
              </button>
              <button class="sort-btn w-full h-full flex items-center justify-center gap-2 bg-black/30 border border-white/20 text-white/70 text-xs font-medium rounded-lg hover:bg-white/10 transition-all duration-200" data-sort="type">
                📋 Type
              </button>
              <button class="sort-btn w-full h-full flex items-center justify-center gap-2 bg-black/30 border border-white/20 text-white/70 text-xs font-medium rounded-lg hover:bg-white/10 transition-all duration-200" data-sort="rarity">
                ⭐ Rarity
              </button>
              <button class="sort-btn w-full h-full flex items-center justify-center gap-2 bg-black/30 border border-white/20 text-white/70 text-xs font-medium rounded-lg hover:bg-white/10 transition-all duration-200" data-sort="level">
                🔢 Level
              </button>
              <button class="sort-btn w-full h-full flex items-center justify-center gap-2 bg-black/30 border border-white/20 text-white/70 text-xs font-medium rounded-lg hover:bg-white/10 transition-all duration-200" data-sort="value">
                💰 Value
              </button>
              <button class="sort-btn w-full h-full flex items-center justify-center gap-2 bg-black/30 border border-white/20 text-white/70 text-xs font-medium rounded-lg hover:bg-white/10 transition-all duration-200" data-sort="weight">
                📏 Weight
              </button>
            </div>
          </div>

          <!-- Filter Categories -->
          <div class="grid grid-cols-2 gap-2 md:grid-cols-4 relative z-0">
            <button class="filter-btn active w-full px-4 py-2 bg-gradient-to-r from-amber-500/80 to-amber-600/80 text-white text-sm font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg relative z-20" data-filter="all">
              All Items
            </button>
            <button class="filter-btn w-full px-4 py-2 bg-black/30 border border-white/20 text-white/70 text-sm font-medium rounded-xl hover:bg-white/10 hover:shadow-sm transition-all duration-300 relative z-20" data-filter="weapons">
              ⚔️ Weapons
            </button>
            <button class="filter-btn w-full px-4 py-2 bg-black/30 border border-white/20 text-white/70 text-sm font-medium rounded-xl hover:bg-white/10 hover:shadow-sm transition-all duration-300 relative z-20 touch-action:manipulation user-select:none" data-filter="armor">
              🛡️ Armor
            </button>
            <button class="filter-btn w-full px-4 py-2 bg-black/30 border border-white/20 text-white/70 text-sm font-medium rounded-xl hover:bg-white/10 hover:shadow-sm transition-all duration-300 relative z-20" data-filter="consumables">
              🧪 Consumables
            </button>
            <button class="filter-btn w-full px-4 py-2 bg-black/30 border border-white/20 text-white/70 text-sm font-medium rounded-xl hover:bg-white/10 hover:shadow-sm transition-all duration-300 relative z-20" data-filter="materials">
              🔧 Materials
            </button>
            <button class="filter-btn w-full px-4 py-2 bg-black/30 border border-white/20 text-white/70 text-sm font-medium rounded-xl hover:bg-white/10 hover:shadow-sm transition-all duration-300 relative z-20" data-filter="quest">
              📜 Quest Items
            </button>
            <button class="filter-btn w-full px-4 py-2 bg-black/30 border border-white/20 text-white/70 text-sm font-medium rounded-xl hover:bg-white/10 hover:shadow-sm transition-all duration-300 relative z-20" data-filter="junk">
              🗑️ Junk
            </button>
            <button class="filter-btn w-full px-4 py-2 bg-black/30 border border-white/20 text-white/70 text-sm font-medium rounded-xl hover:bg-white/10 hover:shadow-sm transition-all duration-300 relative z-20" data-filter="misc">
              💎 Misc
            </button>
          </div>
        </div>

        <!-- Inventory Grid Container (8x12 = 96 slots) -->
        <div class="flex-1 p-4 overflow-y-auto custom-scrollbar">
          <div class="grid grid-cols-8 gap-2 max-w-full" id="inventory-grid">
            ${generateInventorySlots()}
          </div>
        </div>

        <!-- Inventory Footer -->
        <div class="flex-shrink-0 bg-gradient-to-r from-slate-800/90 to-slate-700/90 border-t-2 border-amber-500/30 p-3">
          <div class="flex items-center justify-between">
            <div class="flex gap-3">
              <button class="px-4 py-2 bg-gradient-to-r from-red-500/80 to-red-600/80 hover:from-red-400 hover:to-red-500 text-white text-sm font-bold rounded-lg transition-all duration-200 hover:scale-105">
                🗑️ Delete Selected
              </button>
              <button class="px-4 py-2 bg-gradient-to-r from-blue-500/80 to-blue-600/80 hover:from-blue-400 hover:to-blue-500 text-white text-sm font-bold rounded-lg transition-all duration-200 hover:scale-105">
                📦 Auto-Sort
              </button>
              <button class="px-4 py-2 bg-gradient-to-r from-green-500/80 to-green-600/80 hover:from-green-400 hover:to-green-500 text-white text-sm font-bold rounded-lg transition-all duration-200 hover:scale-105">
                💰 Sell Junk
              </button>
            </div>
            <div class="text-white/70 text-sm">
              Selected: <span class="text-amber-300 font-bold" id="selected-count">0</span> items
            </div>
          </div>
        </div>
      </div>

      <!-- Right Panel: Item Details -->
      <div class="w-80 bg-gradient-to-b from-slate-800/90 to-slate-900/90 border-l-2 border-white/10 flex flex-col">
        <!-- Item Details Header -->
        <div class="p-4 border-b border-white/10">
          <h3 class="text-white text-lg font-bold uppercase tracking-wide">Item Details</h3>
        </div>
        
        <!-- Item Details Content -->
        <div class="flex-1 p-4 overflow-y-auto custom-scrollbar" id="item-details-panel">
          <div class="text-center text-white/50 py-8">
            <div class="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 7c1-1 3-1 5-1s4 0 5 1v12H5V7Z"/>
                <path d="M12 6V2"/>
                <path d="M8 6V4"/>
                <path d="M16 6V4"/>
              </svg>
            </div>
            <p class="text-sm">Click an item to view details</p>
          </div>
        </div>
      </div>

      <!-- Enhanced Hover Tooltip -->
      <div id="item-tooltip" class="fixed pointer-events-none z-50 opacity-0 transition-all duration-200 transform translate-y-2">
        <div class="bg-gradient-to-br from-slate-900/98 to-slate-800/98 border-2 border-amber-500/50 rounded-xl p-4 shadow-2xl backdrop-blur-sm max-w-sm">
          <div class="tooltip-content">
            <!-- Tooltip content will be dynamically generated -->
          </div>
        </div>
      </div>

      <!-- Right-Click Context Menu -->
      <div id="context-menu" class="fixed z-50 opacity-0 pointer-events-none transition-all duration-200 transform scale-95">
        <div class="bg-gradient-to-br from-slate-900/98 to-slate-800/98 border border-white/20 rounded-lg shadow-2xl backdrop-blur-sm min-w-48">
          <div class="p-2">
            <button class="context-menu-item w-full text-left px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white rounded transition-all duration-150" data-action="use">
              <span class="mr-2">🔧</span> Use Item
            </button>
            <button class="context-menu-item w-full text-left px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white rounded transition-all duration-150" data-action="equip">
              <span class="mr-2">⚔️</span> Equip
            </button>
            <button class="context-menu-item w-full text-left px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white rounded transition-all duration-150" data-action="split">
              <span class="mr-2">✂️</span> Split Stack
            </button>
            <div class="border-t border-white/10 my-1"></div>
            <button class="context-menu-item w-full text-left px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white rounded transition-all duration-150" data-action="favorite">
              <span class="mr-2">⭐</span> Add to Favorites
            </button>
            <button class="context-menu-item w-full text-left px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white rounded transition-all duration-150" data-action="sell">
              <span class="mr-2">💰</span> Quick Sell
            </button>
            <div class="border-t border-white/10 my-1"></div>
            <button class="context-menu-item w-full text-left px-3 py-2 text-red-400 hover:bg-red-500/20 hover:text-red-300 rounded transition-all duration-150" data-action="delete">
              <span class="mr-2">🗑️</span> Delete Item
            </button>
          </div>
        </div>
      </div>
    </div>

    <style>
      .custom-scrollbar::-webkit-scrollbar {
        width: 8px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 4px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(245, 158, 11, 0.6);
        border-radius: 4px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: rgba(245, 158, 11, 0.8);
      }

      .inventory-slot {
        aspect-ratio: 1;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
      }
      
      .inventory-slot:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(245, 158, 11, 0.3);
      }
      
      .inventory-slot.selected {
        border-color: rgba(34, 197, 94, 0.8) !important;
        box-shadow: 0 0 20px rgba(34, 197, 94, 0.4);
      }
      
      .inventory-slot.dragging {
        opacity: 0.5;
        transform: rotate(5deg) scale(1.1);
        z-index: 1000;
      }

      .inventory-slot.active {
        border-color: rgba(59, 130, 246, 0.8) !important;
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
        background: rgba(59, 130, 246, 0.1) !important;
      }

      .rarity-common { border-color: rgba(156, 163, 175, 0.6); }
      .rarity-uncommon { border-color: rgba(34, 197, 94, 0.6); }
      .rarity-rare { border-color: rgba(59, 130, 246, 0.6); }
      .rarity-epic { border-color: rgba(168, 85, 247, 0.6); }
      .rarity-legendary { border-color: rgba(245, 158, 11, 0.6); }
      .rarity-mythic { border-color: rgba(239, 68, 68, 0.6); }

      .filter-btn.active {
        background: linear-gradient(to right, rgba(245, 158, 11, 0.8), rgba(217, 119, 6, 0.8)) !important;
        border-color: rgba(245, 158, 11, 0.6) !important;
        color: white !important;
      }

      .filter-btn {
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        user-select: none;
        position: relative;
      }

      .filter-btn:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      }

      .filter-btn .emoji {
        font-size: 1rem;
        line-height: 1;
      }

      .filter-btn .label {
        font-size: 0.75rem;
        font-weight: 500;
      }

      .sort-btn {
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        user-select: none;
        position: relative;
      }

      .sort-btn:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      }

      .sort-btn.active {
        background: linear-gradient(to right, rgba(245, 158, 11, 0.8), rgba(217, 119, 6, 0.8)) !important;
        border-color: rgba(245, 158, 11, 0.6) !important;
        color: white !important;
      }

      .sort-btn .emoji {
        font-size: 1rem;
        line-height: 1;
      }

      .sort-btn .label {
        font-size: 0.75rem;
        font-weight: 500;
      }

      .item-stack {
        position: absolute;
        bottom: 2px;
        right: 2px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        font-size: 10px;
        font-weight: bold;
        padding: 1px 4px;
        border-radius: 3px;
        min-width: 16px;
        text-align: center;
      }

      .item-favorite {
        position: absolute;
        top: 2px;
        left: 2px;
        color: #fbbf24;
        font-size: 12px;
        text-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
      }

      @keyframes itemPickup {
        0% { transform: scale(0.8) rotate(-10deg); opacity: 0; }
        50% { transform: scale(1.1) rotate(5deg); opacity: 1; }
        100% { transform: scale(1) rotate(0deg); opacity: 1; }
      }

      .item-pickup {
        animation: itemPickup 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .context-menu-item {
        font-size: 14px;
        font-weight: 500;
      }

      .stat-bar {
        height: 6px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 3px;
        overflow: hidden;
      }

      .stat-bar-fill {
        height: 100%;
        border-radius: 3px;
        transition: width 0.3s ease;
      }
    </style>
  `;
}

// Global variables for inventory state
let contextMenuTarget: HTMLElement | null = null;

// Initialize inventory functionality - can be called after content is loaded
export function initializeInventory() {
  console.log('🎒 Initializing inventory functionality...');
  
  // Search functionality
  const searchInput = document.getElementById('inventory-search');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
    console.log('🎒 Search functionality initialized');
  }

  // Filter functionality
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', handleFilter);
    });
    console.log(`🎒 Filter functionality initialized (${filterBtns.length} buttons)`);
  }

  // Sort functionality
  const sortButtons = document.querySelectorAll('.sort-btn');
  if (sortButtons.length > 0) {
    sortButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        const sortValue = target.dataset.sort;
        
        // Remove active class from all buttons
        sortButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        target.classList.add('active');
        
        // Call sort handler with the selected value
        const value = sortValue || 'name'; // Fallback to 'name' if sortValue is undefined
        const sortTarget = {
          value,
          addEventListener: () => {},
          dispatchEvent: () => true,
          removeEventListener: () => {}
        } as EventTarget & { value: string };
        
        // Create a custom event that extends Event and includes our target
        const SortEvent = class extends Event {
          target: EventTarget & { value: string };
          constructor(type: string, init?: EventInit) {
            super(type, init);
            this.target = sortTarget;
          }
        };
        
        const sortEvent = new SortEvent('change', { bubbles: true });
        handleSort(sortEvent as unknown as Event);
      });
    });
    console.log(`🎒 Sort functionality initialized (${sortButtons.length} buttons)`);
  }

  // Item interaction
  const inventorySlots = document.querySelectorAll('.inventory-slot');
  console.log(`🎒 Found ${inventorySlots.length} inventory slots`);
  
  if (inventorySlots.length > 0) {
    inventorySlots.forEach(slot => {
      slot.addEventListener('click', handleItemClick);
      slot.addEventListener('mouseenter', handleItemHover);
      slot.addEventListener('mouseleave', handleItemLeave);
      slot.addEventListener('contextmenu', handleRightClick);
      slot.addEventListener('dragstart', handleDragStart as EventListener);
      slot.addEventListener('dragover', handleDragOver as EventListener);
      slot.addEventListener('drop', handleDrop as EventListener);
    });
    console.log('🎒 Item interaction events attached');
  }

  // Context menu functionality
  const contextMenu = document.getElementById('context-menu');
  const contextMenuItems = document.querySelectorAll('.context-menu-item');
  
  if (contextMenu && contextMenuItems.length > 0) {
    contextMenuItems.forEach(item => {
      item.addEventListener('click', handleContextMenuAction);
    });
    console.log(`🎒 Context menu functionality initialized (${contextMenuItems.length} items)`);
  }

  // Close context menu on outside click (only add once to prevent multiple listeners)
  if (!document.body.hasAttribute('data-inventory-listeners-added')) {
    document.addEventListener('click', hideContextMenu);
    document.addEventListener('contextmenu', (e) => {
      const target = e.target as HTMLElement;
      if (!target?.closest('.inventory-slot')) {
        hideContextMenu();
      }
    });
    document.body.setAttribute('data-inventory-listeners-added', 'true');
    console.log('🎒 Global context menu listeners added');
  }
  
  console.log('🎒 Inventory initialization complete');
}

function handleSearch(event: Event) {
  const target = event.target as HTMLInputElement;
  const searchTerm = target.value.toLowerCase();
  const slots = document.querySelectorAll('.inventory-slot[data-item]');
  
  slots.forEach(slot => {
    const slotElement = slot as HTMLElement;
    const itemName = slotElement.dataset.itemName?.toLowerCase() || '';
    const itemType = slotElement.dataset.itemType?.toLowerCase() || '';
    
    if (itemName.includes(searchTerm) || itemType.includes(searchTerm)) {
      slotElement.style.display = 'block';
    } else {
      slotElement.style.display = 'none';
    }
  });
}

function handleFilter(event: Event) {
  const target = event.target as HTMLElement;
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => btn.classList.remove('active'));
  target.classList.add('active');
  
  const filter = target.dataset.filter;
  const slots = document.querySelectorAll('.inventory-slot');
  
  slots.forEach(slot => {
    const slotElement = slot as HTMLElement;
    const itemType = slotElement.dataset.itemType?.toLowerCase() || '';
    const itemName = slotElement.dataset.itemName?.toLowerCase() || '';
    
    // Determine if item is junk based on its name or type
    const isJunk = itemName.includes('trash') || 
                  itemName.includes('rags') || 
                  itemName.includes('teeth') || 
                  itemName.includes('bloodied') || 
                  itemName.includes('broken') || 
                  itemName.includes('scrap') || 
                  itemName.includes('rotten');
    
    // Show item based on filter type
    if (filter === 'all') {
      slotElement.style.display = 'block';
    } else if (filter === 'junk') {
      slotElement.style.display = isJunk ? 'block' : 'none';
    } else {
      // For other categories, show only items that match the exact type
      slotElement.style.display = itemType === filter ? 'block' : 'none';
    }
  });
}

function handleSort(event: Event) {
  const target = event.target as HTMLSelectElement;
  const sortBy = target.value;
  const grid = document.getElementById('inventory-grid');
  if (!grid) return;
  
  const slots = Array.from(grid.querySelectorAll('.inventory-slot[data-item]')) as HTMLElement[];
  
  slots.sort((a, b) => {
    const aValue = (a.dataset as any)[sortBy] || '';
    const bValue = (b.dataset as any)[sortBy] || '';
    return aValue.localeCompare(bValue);
  });
  
  // Re-append sorted items
  slots.forEach(slot => grid.appendChild(slot));
}

function handleItemClick(event: Event) {
  const slot = event.currentTarget as HTMLElement;
  console.log('🖱️ Item clicked:', slot.dataset.itemName);
  
  if (slot.dataset.item) {
    // Remove active class from all slots
    document.querySelectorAll('.inventory-slot').forEach(s => s.classList.remove('active'));
    
    // Add active class to clicked slot
    slot.classList.add('active');
    
    // Show item details
    showItemDetails(slot);
  }
}

function handleItemHover(event: Event) {
  const slot = event.currentTarget as HTMLElement;
  if (slot.dataset.item) {
    showTooltip(slot);
  }
}

function handleItemLeave() {
  hideTooltip();
}

function handleRightClick(event: Event) {
  event.preventDefault();
  const slot = event.currentTarget as HTMLElement;
  
  if (slot.dataset.item) {
    contextMenuTarget = slot;
    showContextMenu(event as MouseEvent);
  }
}

function showItemDetails(slot: HTMLElement) {
  console.log('🔍 Showing item details for:', slot.dataset.itemName);
  
  const panel = document.getElementById('item-details-panel');
  if (!panel) return;
  
  const itemData = {
    name: slot.dataset.itemName || 'Unknown Item',
    type: slot.dataset.itemType || 'misc',
    rarity: slot.dataset.rarity || 'common',
    level: slot.dataset.level || '1',
    value: slot.dataset.value || '0',
    description: slot.dataset.description || 'No description available.',
    stats: JSON.parse(slot.dataset.stats || '{}'),
    isFavorite: slot.dataset.favorite === 'true'
  };
  
  panel.innerHTML = generateItemDetailsContent(itemData);
}

function generateInventorySlots(): string {
  const sampleItems = [
    { name: "Dragonslayer Sword", type: "weapons", rarity: "legendary", level: "80", value: "2500", icon: "⚔️", stack: null, stats: { damage: 150, durability: 85, maxDurability: 100 } },
    { name: "Mystic Robes", type: "armor", rarity: "epic", level: "75", value: "1200", icon: "👘", stack: null, stats: { defense: 45, durability: 92, maxDurability: 100 } },
    { name: "Health Potion", type: "consumables", rarity: "common", level: "1", value: "50", icon: "🧪", stack: "25", stats: { healing: 100 } },
    { name: "Mithril Ore", type: "materials", rarity: "rare", level: "60", value: "150", icon: "⛏️", stack: "99", stats: {} },
    { name: "Ancient Scroll", type: "quest", rarity: "uncommon", level: "45", value: "0", icon: "📜", stack: null, stats: {} },
    { name: "Phoenix Feather", type: "materials", rarity: "mythic", level: "90", value: "5000", icon: "🪶", stack: "3", stats: {} },
    { name: "Steel Helmet", type: "armor", rarity: "uncommon", level: "30", value: "300", icon: "⛑️", stack: null, stats: { defense: 25, durability: 78, maxDurability: 100 } },
    { name: "Magic Crystal", type: "misc", rarity: "rare", level: "50", value: "800", icon: "💎", stack: "12", stats: {} },
    { name: "Elven Bow", type: "weapons", rarity: "epic", level: "65", value: "1800", icon: "🏹", stack: null, stats: { damage: 95, durability: 88, maxDurability: 100 } },
    { name: "Mana Potion", type: "consumables", rarity: "common", level: "1", value: "75", icon: "🔮", stack: "18", stats: { manaRestore: 150 } },
    { name: "Diamond Ring", type: "misc", rarity: "legendary", level: "70", value: "3200", icon: "💍", stack: null, stats: {} },
    { name: "Fire Scroll", type: "consumables", rarity: "rare", level: "40", value: "200", icon: "🔥", stack: "8", stats: { damage: 75 } },
    { name: "Iron Shield", type: "armor", rarity: "common", level: "25", value: "180", icon: "🛡️", stack: null, stats: { defense: 20, durability: 65, maxDurability: 100 } },
    { name: "Enchanted Gem", type: "materials", rarity: "epic", level: "55", value: "1500", icon: "💠", stack: "5", stats: {} },
    { name: "Healing Herb", type: "consumables", rarity: "common", level: "5", value: "25", icon: "🌿", stack: "45", stats: { healing: 50 } },
  ];

  let slots = '';
  
  for (let i = 0; i < 96; i++) { // 8x12 = 96 slots
    const hasItem = i < sampleItems.length;
    const item = hasItem ? sampleItems[i] : null;
    
    if (hasItem && item) {
      slots += `
        <div class="inventory-slot rarity-${item.rarity} bg-black/40 border-2 rounded-lg cursor-pointer relative flex items-center justify-center text-2xl hover:bg-black/60 transition-all duration-200" 
             draggable="true"
             data-slot-index="${i}"
             data-item="true"
             data-item-name="${item.name}"
             data-item-type="${item.type}"
             data-rarity="${item.rarity}"
             data-level="${item.level}"
             data-value="${item.value}"
             data-stats='${JSON.stringify(item.stats)}'
             data-favorite="false"
             data-description="A powerful ${item.type} item with ${item.rarity} rarity. ${item.stats.damage ? `Deals ${item.stats.damage} damage.` : ''} ${item.stats.defense ? `Provides ${item.stats.defense} defense.` : ''} ${item.stats.healing ? `Restores ${item.stats.healing} health.` : ''}">
          <span class="drop-shadow-lg">${item.icon}</span>
          ${item.stack ? `<div class="item-stack">${item.stack}</div>` : ''}
        </div>
      `;
    } else {
      slots += `
        <div class="inventory-slot bg-black/20 border-2 border-white/10 rounded-lg cursor-pointer relative flex items-center justify-center hover:bg-black/30 transition-all duration-200" 
             data-slot-index="${i}">
          <div class="w-6 h-6 border border-white/20 rounded border-dashed opacity-30"></div>
        </div>
      `;
    }
  }
  
  return slots;
}

function showTooltip(slot: HTMLElement) {
  const tooltip = document.getElementById('item-tooltip');
  if (!tooltip) return;
  
  const content = tooltip.querySelector('.tooltip-content');
  if (!content) return;
  
  const itemData = {
    name: slot.dataset.itemName || 'Unknown Item',
    type: slot.dataset.itemType || 'misc',
    rarity: slot.dataset.rarity || 'common',
    level: slot.dataset.level || '1',
    value: slot.dataset.value || '0',
    description: slot.dataset.description || 'No description available.',
    stats: JSON.parse(slot.dataset.stats || '{}')
  };
  
  content.innerHTML = generateTooltipContent(itemData);
  
  // Position tooltip
  const rect = slot.getBoundingClientRect();
  tooltip.style.left = rect.right + 10 + 'px';
  tooltip.style.top = rect.top + 'px';
  
  // Show tooltip
  tooltip.classList.remove('opacity-0', 'translate-y-2');
  tooltip.classList.add('opacity-100', 'translate-y-0');
}

function hideTooltip() {
  const tooltip = document.getElementById('item-tooltip');
  if (!tooltip) return;
  
  tooltip.classList.add('opacity-0', 'translate-y-2');
  tooltip.classList.remove('opacity-100', 'translate-y-0');
}

function generateTooltipContent(item: any): string {
  const rarityColors: { [key: string]: string } = {
    common: '#9CA3AF',
    uncommon: '#22C55E',
    rare: '#3B82F6',
    epic: '#A855F7',
    legendary: '#F59E0B',
    mythic: '#EF4444'
  };
  
  return `
    <div class="space-y-3">
      <div class="text-center">
        <div class="font-bold text-lg mb-1" style="color: ${rarityColors[item.rarity] || rarityColors.common}">${item.name}</div>
        <div class="text-sm text-white/70 capitalize">${item.type} • Level ${item.level}</div>
        <div class="text-xs text-white/50 uppercase tracking-wide">${item.rarity}</div>
      </div>
      
      ${Object.keys(item.stats).length > 0 ? `
        <div class="border-t border-white/20 pt-2">
          <div class="text-xs text-white/60 mb-1 uppercase tracking-wide">Stats</div>
          ${item.stats.damage ? `<div class="text-sm text-red-400">+${item.stats.damage} Damage</div>` : ''}
          ${item.stats.defense ? `<div class="text-sm text-blue-400">+${item.stats.defense} Defense</div>` : ''}
          ${item.stats.durability ? `<div class="text-sm text-green-400">Durability: ${item.stats.durability}/${item.stats.maxDurability}</div>` : ''}
        </div>
      ` : ''}
      
      <div class="border-t border-white/20 pt-2">
        <div class="text-sm text-white/80 mb-2">${item.description}</div>
        <div class="flex justify-between text-xs text-white/60">
          <span>Value: ${item.value}g</span>
          <span class="capitalize">${item.rarity}</span>
        </div>
      </div>
    </div>
  `;
}

function showContextMenu(event: MouseEvent) {
  const contextMenu = document.getElementById('context-menu');
  if (!contextMenu) return;
  
  contextMenu.style.left = event.pageX + 'px';
  contextMenu.style.top = event.pageY + 'px';
  
  contextMenu.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
  contextMenu.classList.add('opacity-100', 'pointer-events-auto', 'scale-100');
}

function hideContextMenu() {
  const contextMenu = document.getElementById('context-menu');
  if (!contextMenu) return;
  
  contextMenu.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
  contextMenu.classList.remove('opacity-100', 'pointer-events-auto', 'scale-100');
}

function handleContextMenuAction(event: Event) {
  const target = event.currentTarget as HTMLElement;
  const action = target.dataset.action;
  
  if (contextMenuTarget) {
    switch (action) {
      case 'use':
        console.log('Using item:', contextMenuTarget.dataset.itemName);
        break;
      case 'equip':
        console.log('Equipping item:', contextMenuTarget.dataset.itemName);
        break;
      case 'split':
        console.log('Splitting stack:', contextMenuTarget.dataset.itemName);
        break;
      case 'favorite':
        toggleFavorite(contextMenuTarget);
        break;
      case 'sell':
        console.log('Selling item:', contextMenuTarget.dataset.itemName);
        break;
      case 'delete':
        console.log('Deleting item:', contextMenuTarget.dataset.itemName);
        break;
    }
  }
  
  hideContextMenu();
}

function toggleFavorite(slot: HTMLElement) {
  const isFavorite = slot.dataset.favorite === 'true';
  slot.dataset.favorite = (!isFavorite).toString();
  
  if (!isFavorite) {
    const favoriteIcon = document.createElement('div');
    favoriteIcon.className = 'item-favorite';
    favoriteIcon.textContent = '⭐';
    slot.appendChild(favoriteIcon);
  } else {
    const favoriteIcon = slot.querySelector('.item-favorite');
    if (favoriteIcon) {
      favoriteIcon.remove();
    }
  }
  
  // Update details panel if this item is selected
  if (slot.classList.contains('active')) {
    showItemDetails(slot);
  }
}

function handleDragStart(event: Event) {
  const dragEvent = event as DragEvent;
  const target = dragEvent.target as HTMLElement;
  if (dragEvent.dataTransfer && target.dataset.slotIndex) {
    dragEvent.dataTransfer.setData('text/plain', target.dataset.slotIndex);
    target.classList.add('dragging');
  }
}

function handleDragOver(event: Event) {
  event.preventDefault();
}

function handleDrop(event: Event) {
  event.preventDefault();
  const dragEvent = event as DragEvent;
  const draggedIndex = dragEvent.dataTransfer?.getData('text/plain');
  const draggedSlot = document.querySelector(`[data-slot-index="${draggedIndex}"]`) as HTMLElement;
  const targetSlot = dragEvent.currentTarget as HTMLElement;
  
  if (draggedSlot && targetSlot && draggedSlot !== targetSlot) {
    // Swap items
    const tempData = { ...draggedSlot.dataset };
    const tempHTML = draggedSlot.innerHTML;
    
    // Copy target to dragged
    Object.keys(targetSlot.dataset).forEach(key => {
      if (key.startsWith('item')) {
        draggedSlot.dataset[key] = targetSlot.dataset[key];
      }
    });
    draggedSlot.innerHTML = targetSlot.innerHTML;
    
    // Copy temp to target
    Object.keys(tempData).forEach(key => {
      if (key.startsWith('item')) {
        targetSlot.dataset[key] = tempData[key];
      }
    });
    targetSlot.innerHTML = tempHTML;
  }
  
  draggedSlot?.classList.remove('dragging');
}

function generateItemDetailsContent(item: any): string {
  const rarityColors: { [key: string]: string } = {
    common: '#9CA3AF',
    uncommon: '#22C55E',
    rare: '#3B82F6',
    epic: '#A855F7',
    legendary: '#F59E0B',
    mythic: '#EF4444'
  };

  const typeIcons: { [key: string]: string } = {
    weapons: '⚔️',
    armor: '🛡️',
    consumables: '🧪',
    materials: '🔧',
    quest: '📜',
    misc: '💎'
  };
  
  return `
    <div class="space-y-4">
      <!-- Item Header -->
      <div class="text-center">
        <div class="w-20 h-20 mx-auto mb-3 bg-black/40 border-2 rounded-lg flex items-center justify-center text-3xl" style="border-color: ${rarityColors[item.rarity] || rarityColors.common}">
          <span>${typeIcons[item.type] || '📦'}</span>
        </div>
        <h3 class="font-bold text-xl mb-1" style="color: ${rarityColors[item.rarity] || rarityColors.common}">${item.name}</h3>
        <p class="text-white/70 text-sm capitalize">${item.type} • Level ${item.level}</p>
        <p class="text-white/50 text-xs uppercase tracking-wide">${item.rarity}</p>
      </div>

      <!-- Item Stats -->
      <div class="bg-black/20 border border-white/10 rounded-lg p-3">
        <h4 class="text-white font-semibold mb-2 text-sm uppercase tracking-wide">Statistics</h4>
        <div class="space-y-2">
          ${item.stats.damage ? `
            <div class="flex justify-between items-center">
              <span class="text-white/70 text-sm">Damage</span>
              <span class="text-red-400 font-bold">${item.stats.damage}</span>
            </div>
          ` : ''}
          ${item.stats.defense ? `
            <div class="flex justify-between items-center">
              <span class="text-white/70 text-sm">Defense</span>
              <span class="text-blue-400 font-bold">${item.stats.defense}</span>
            </div>
          ` : ''}
          ${item.stats.durability ? `
            <div class="flex justify-between items-center">
              <span class="text-white/70 text-sm">Durability</span>
              <div class="flex items-center gap-2">
                <div class="stat-bar w-16">
                  <div class="stat-bar-fill bg-green-500" style="width: ${(item.stats.durability / item.stats.maxDurability) * 100}%"></div>
                </div>
                <span class="text-white text-xs">${item.stats.durability}/${item.stats.maxDurability}</span>
              </div>
            </div>
          ` : ''}
          <div class="flex justify-between items-center">
            <span class="text-white/70 text-sm">Value</span>
            <span class="text-yellow-400 font-bold">${item.value}g</span>
          </div>
        </div>
      </div>

      <!-- Item Description -->
      <div class="bg-black/20 border border-white/10 rounded-lg p-3">
        <h4 class="text-white font-semibold mb-2 text-sm uppercase tracking-wide">Description</h4>
        <p class="text-white/80 text-sm leading-relaxed">${item.description}</p>
      </div>

      <!-- Item Actions -->
      <div class="space-y-2">
        <button class="w-full px-4 py-2 bg-gradient-to-r from-blue-500/80 to-blue-600/80 hover:from-blue-400 hover:to-blue-500 text-white text-sm font-bold rounded-lg transition-all duration-200 hover:scale-105">
          🔧 Use Item
        </button>
        <button class="w-full px-4 py-2 bg-gradient-to-r from-purple-500/80 to-purple-600/80 hover:from-purple-400 hover:to-purple-500 text-white text-sm font-bold rounded-lg transition-all duration-200 hover:scale-105">
          ⚔️ Equip
        </button>
        <button class="w-full px-4 py-2 bg-gradient-to-r from-amber-500/80 to-amber-600/80 hover:from-amber-400 hover:to-amber-500 text-white text-sm font-bold rounded-lg transition-all duration-200 hover:scale-105">
          ${item.isFavorite ? '⭐ Remove from Favorites' : '☆ Add to Favorites'}
        </button>
      </div>
    </div>
  `;
}

// Allow UI refresh from outside (e.g., after crafting)
export function updateInventoryUI() {
  const content = document.getElementById('character_window_content');
  if (content) {
    content.innerHTML = createInventoryContent();
    // Initialize the inventory after the content is loaded
    setTimeout(() => {
      initializeInventory();
    }, 100);
  }
}